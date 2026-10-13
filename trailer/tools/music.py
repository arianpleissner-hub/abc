import numpy as np, wave, sys
SR=44100; DUR=54; t=np.arange(SR*DUR)/SR
def hz(m): return 440*2**((m-69)/12)
# Am  F  C  G  – ruhige Flächen, 4 s pro Akkord
prog=[[57,60,64,69],[53,57,60,65],[48,55,60,64],[55,59,62,67]]
bass=[45,41,48,43]
out=np.zeros_like(t); L=4.0
for i in range(int(DUR/L)+1):
    c=prog[i%4]; s=i*L
    seg=(t>=s-0.01)&(t<s+L+2.0)
    tt=t[seg]-s
    env=np.clip(tt/1.2,0,1)*np.clip((L+2.0-tt)/2.0,0,1)
    for m in c:
        f=hz(m+12)
        out[seg]+=env*(np.sin(2*np.pi*f*tt)+.25*np.sin(4*np.pi*f*tt)+.08*np.sin(6*np.pi*f*tt))*.12
    f=hz(bass[i%4]); out[seg]+=env*np.sin(2*np.pi*f*tt)*.22
    # leiser Puls (Klavier-artig) auf jeder Viertel ab Sek. 8
    if s>=7.5:
        for k in range(4):
            on=k*1.0; m=c[(k+i)%4]+24; f=hz(m)
            pt=tt-on; pe=(pt>=0)*np.exp(-np.clip(pt,0,None)*3.0)
            out[seg]+=pe*np.sin(2*np.pi*f*np.clip(pt,0,None))*.07
# sanfter Hall
d=int(.23*SR); 
for g in (.35,.2,.1): out[d:]+=out[:-d]*g; d=int(d*1.7)
fade=np.clip(t/2.5,0,1)*np.clip((DUR-t)/3.0,0,1)
out*=fade; out/=np.abs(out).max(); out*=.35
st=np.stack([out,np.roll(out,int(.012*SR))],1)
w=wave.open(sys.argv[1],'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((st*32767).astype('<i2').tobytes()); w.close()
