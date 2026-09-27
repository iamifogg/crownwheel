(async()=>{
  const parts=['./packed/app-01.b64','./packed/app-02.b64','./packed/app-03.b64','./packed/app-04.b64'];
  try {
    if (!('DecompressionStream' in window)) throw new Error('This browser does not support the decompression feature Crownwheel needs. Please update Chrome or Samsung Internet.');
    const texts=await Promise.all(parts.map(async p=>{const r=await fetch(p);if(!r.ok)throw new Error(`Failed to load ${p}`);return r.text();}));
    const bin=atob(texts.join(''));
    const bytes=Uint8Array.from(bin,c=>c.charCodeAt(0));
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const code=await new Response(stream).text();
    new Function(code)();
  } catch (err) {
    console.error(err);
    const app=document.getElementById('app');
    if(app) app.innerHTML='<main style="padding:24px;font-family:system-ui;color:#f0e6d2;background:#120f0b"><h1>Crownwheel could not start</h1><p>'+String(err.message||err)+'</p></main>';
  }
})();
