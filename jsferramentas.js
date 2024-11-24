var i = 0;  // Inicie o índice como 0
var iframes = ['phillips.html', 'allen.html', 'abracadeira.html', 'pastatermica.html'];
var iframesPecas = ['placamae.html', 'processador.html', 'placadevideo.html', 'hdssd.html', 'memoriaram.html', 'fonte.html', 'gabinete.html'];
var iframesEnglish = ['phillipsEnglish.html', 'allenEnglish.html', 'abracadeiraEnglish.html', 'pastatermicaEnglish.html'];
var iframesPecasEnglish = ['placamaeEnglish.html', 'processadorEnglish.html', 'placadevideoEnglish.html', 'hdssdEnglish.html', 'memoriaramEnglish.html', 'fonteEnglish.html', 'gabineteEnglish.html'];

function nextIframe(){

    // Verifique se já percorremos todos os elementos
    if (i >= iframes.length) return true;  // fim da lista
    
    // Muda o src do iframe
    document.getElementById('quadro').src = iframes[i];
    
    // Incrementa o índice e verifica se devemos voltar ao início
    i = (i + 1) % iframes.length;

    return false;  // Continua a execução
}

function prevIframe(){
  document.getElementById('quadro').src = iframes[(i = i<=0 ? 0 : i-1)%iframes.length];
}

function nextIframePecas(){

    // Verifique se já percorremos todos os elementos
    if (i >= iframesPecas.length) return true;  // fim da lista
    
    // Muda o src do iframe
    document.getElementById('quadroPecas').src = iframesPecas[i];
    
    // Incrementa o índice e verifica se devemos voltar ao início
    i = (i + 1) % iframesPecas.length;

    return false;  // Continua a execução
}

function prevIframePecas(){
  document.getElementById('quadroPecas').src = iframesPecas[(i = i<=0 ? 0 : i-1)%iframesPecas.length];
}


// Para inglês


function nextIframeEnglish(){

  // Verifique se já percorremos todos os elementos
  if (i >= iframesEnglish.length) return true;  // fim da lista
  
  // Muda o src do iframe
  document.getElementById('frame').src = iframesEnglish[i];
  
  // Incrementa o índice e verifica se devemos voltar ao início
  i = (i + 1) % iframesEnglish.length;

  return false;  // Continua a execução
}

function prevIframeEnglish(){
document.getElementById('frame').src = iframesEnglish[(i = i<=0 ? 0 : i-1)%iframes.length];
}

function nextIframePecasEnglish(){

  // Verifique se já percorremos todos os elementos
  if (i >= iframesPecasEnglish.length) return true;  // fim da lista
  
  // Muda o src do iframe
  document.getElementById('frameTools').src = iframesPecasEnglish[i];
  
  // Incrementa o índice e verifica se devemos voltar ao início
  i = (i + 1) % iframesPecasEnglish.length;

  return false;  // Continua a execução
}

function prevIframePecasEnglish(){
document.getElementById('frameTools').src = iframesPecasEnglish[(i = i<=0 ? 0 : i-1)%iframesPecasEnglish.length];
}