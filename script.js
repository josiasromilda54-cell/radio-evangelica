// ============================================================
// Rádio Vida Nova — Player, Biblioteca & Vinhetas
// 100% gratuito. Substitua as URLs pelos seus arquivos MP3.
// ============================================================

// ---------- Biblioteca de louvores ----------
// genre: sertanejo | mpb | classico | orquestrado | adoracao | vinheta
const LIBRARY = [
  // === HINOS DA HARPA (cantados - Archive.org) ===
  { title: 'Cristo Chama o Pecador', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/431%20-%20Coral%20Orlando%20V.N.%20-%20Cristo%20Chama%20o%20Pecador.m4a', dur: '3:45' },
  { title: 'Consagrado ao Senhor', artist: 'Gerson Rufino', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/432%20-%20Gerson%20Rufino%2C%20Matriz%20Music%20-%20Consagrado%20ao%20Senhor.m4a', dur: '4:32' },
  { title: 'A Teus Pés', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/434%20-%20Coral%20Orlando%20V.N.%20-%20A%20Teus%20P%C3%A9s.m4a', dur: '3:55' },
  { title: 'Jesus Me Levantou', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/435%20-%20Coral%20Orlando%20V.N.%20-%20Jesus%20Me%20Levantou.m4a', dur: '3:21' },
  { title: 'O Dom Celeste', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/437%20-%20Coral%20Orlando%20V.N.%20-%20O%20Dom%20Celeste.m4a', dur: '2:42' },
  { title: 'Voltai-Vos para Mim', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/438%20-%20Coral%20Orlando%20V.N.%20-%20Voltai-Vos%20para%20Mim.m4a', dur: '2:17' },
  { title: 'Aos Pés de Cristo Prostrados', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/439%20-%20Coral%20Orlando%20V.N.%20-%20Aos%20P%C3%A9s%20de%20Cristo%20Prostrados.m4a', dur: '3:15' },
  { title: 'Fazê Já o Teu Querer', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/440%20-%20Marcos%20Ant%C3%B4nio%20-%20Faz%C3%AA%20J%C3%A1%20o%20Teu%20Querer.m4a', dur: '3:18' },
  { title: 'A Chuva do Consolador', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/441%20-%20Coral%20Orlando%20V.N.%20-%20A%20Chuva%20do%20Consolador.m4a', dur: '3:11' },
  { title: 'Breve Verei o Bom Jesús', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/442%20-%20Marcos%20Ant%C3%B4nio%20-%20Breve%20Verei%20o%20Bom%20J%C3%A9sus.m4a', dur: '3:09' },
  { title: 'Larga o Mundo!', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/443%20-%20Coral%20Orlando%20V.N.%20-%20Larga%20o%20Mundo%21.m4a', dur: '3:21' },
  { title: 'Escuta, Pobre Pecador', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/444%20-%20Coral%20Orlando%20V.N.%20-%20Escuta%2C%20Pobre%20Pecador.m4a', dur: '3:22' },
  { title: 'Resgatado Com o Sangue de Cristo', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/445%20-%20Coral%20Orlando%20V.N.%20-%20Resgatado%20Com%20o%20Sangue%20de%20Cristo.m4a', dur: '3:40' },
  { title: 'Ó Vem Já!', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/446%20-%20Coral%20Orlando%20V.N.%20-%20%C3%93%20Vem%20J%C3%A1%21.m4a', dur: '3:41' },
  { title: 'Nascer De Novo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/447%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Nascer%20De%20Novo.m4a', dur: '2:37' },
  { title: 'Crentes, Avançai', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/448%20-%20Coral%20Orlando%20V.N.%20-%20Crentes%2C%20Avan%C3%A7ai.m4a', dur: '3:23' },
  { title: 'A Beira da Estrada', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/449%20-%20Coral%20Orlando%20V.N.%20-%20A%20Beira%20da%20Estrada.m4a', dur: '3:08' },
  { title: 'O Sol da Justiça', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/450%20-%20Coral%20Orlando%20V.N.%20-%20O%20Sol%20da%20Justi%C3%A7a.m4a', dur: '2:50' },
  { title: 'Meu Jesus Vem', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/451%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Meu%20Jesus%20Vem.m4a', dur: '3:52' },
  { title: 'Seguirei a Cristo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/452%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Seguirei%20a%20Cristo.m4a', dur: '0:46' },
  { title: 'Deus É o Mesmo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/453%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Deus%20%C3%89%20o%20Mesmo.m4a', dur: '3:22' },
  { title: 'Alegrai-vos Ó Remidos', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/454%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Alegrai-vos%20%C3%93%20Remidos.m4a', dur: '2:48' },
  { title: 'O Povo de Deus Na Terra', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/455%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20O%20Povo%20de%20Deus%20Na%20Terra.m4a', dur: '3:25' },
  { title: 'Fonte Transbordante', artist: 'Giovani Santos', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/456%20-%20Giovani%20Santos%20-%20Fonte%20Transbordante.m4a', dur: '3:38' },
  { title: 'Festim de Glória', artist: 'Ozéias', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/457%20-%20Oz%C3%A9ias%20-%20Festim%20de%20Gl%C3%B3ria.m4a', dur: '3:45' },
  { title: 'Guia Meus Passos', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/458%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Guia%20Meus%20Passos.m4a', dur: '3:54' },
  { title: 'As Firmes Promessas', artist: 'Raiz Worship', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/459%20-%20Raiz%20Worship%20-%20As%20Firmes%20Promessas.m4a', dur: '4:40' },
  { title: 'Dize-o A Cristo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/460%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Dize-o%20A%20Cristo.m4a', dur: '3:50' },
  { title: 'Jesus Chorou Sobre Jerusalém', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/461%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Jesus%20Chorou%20Sobre%20Jerusal%C3%A9m.m4a', dur: '4:49' },
  { title: 'Glória Ao Senhor', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/462%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Gl%C3%B3ria%20Ao%20Senhor.m4a', dur: '1:12' },
  { title: 'O Povo de Abraão', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/463%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20O%20Povo%20de%20Abra%C3%A3o.m4a', dur: '3:38' },
  { title: 'Plena Graça', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/464%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Plena%20Gra%C3%A7a.m4a', dur: '1:30' },
  { title: 'Ele Sofreu por Mim', artist: 'Coral Orlando V.N.', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/465%20-%20Coral%20Orlando%20V.N.%20-%20Ele%20Sofreu%20por%20Mim.m4a', dur: '5:39' },
  { title: 'Que Maravilha', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/466%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Que%20Maravilha.m4a', dur: '5:39' },
  { title: 'Sobre as Ondas do Mar', artist: 'Jair Pires', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/467%20-%20Jair%20Pires%20-%20Sobre%20as%20Ondas%20do%20Mar.m4a', dur: '2:47' },
  { title: 'Cristo Está Chamando', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/468%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Cristo%20Est%C3%A1%20Chamando.m4a', dur: '3:49' },
  { title: 'Ao Estrugir da Trombeta', artist: 'Eliã Oliveira', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/469%20-%20Eli%C3%A3%20Oliveira%20-%20Ao%20Estrugir%20da%20Trombeta.m4a', dur: '5:44' },
  { title: 'Batismo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/470%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Batismo.m4a', dur: '2:56' },
  { title: 'Avançai Fiéis', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/471%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Avan%C3%A7ai%20Fi%C3%A9is.m4a', dur: '4:56' },
  { title: 'Em Meu Lugar', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/472%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Em%20Meu%20Lugar.m4a', dur: '1:39' },
  { title: 'Outro Bem Não Acharei', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/473%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Outro%20Bem%20N%C3%A3o%20Acharei.m4a', dur: '3:21' },
  { title: 'Paz, Doce Paz', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/474%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Paz%2C%20Doce%20Paz.m4a', dur: '3:12' },
  { title: 'Em Belém', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/475%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Em%20Bel%C3%A9m.m4a', dur: '3:46' },
  { title: 'O Cego de Jericó', artist: 'Rose Nascimento', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/476%20-%20Rose%20Nascimento%20-%20O%20Cego%20de%20Jeric%C3%B3.m4a', dur: '3:43' },
  { title: 'Sedes Fortes', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/477%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Sedes%20Fortes.m4a', dur: '4:46' },
  { title: 'Eis-Me Aqui', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/478%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Eis-Me%20Aqui.m4a', dur: '3:46' },
  { title: 'Ao Raiar Do Ano Novo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/479%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Ao%20Raiar%20Do%20Ano%20Novo.m4a', dur: '2:24' },
  { title: 'Fim Do Ano', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/480%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Fim%20Do%20Ano.m4a', dur: '3:45' },
  { title: 'Cristo E Sua Humilhação', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/481%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Cristo%20E%20Sua%20Humilha%C3%A7%C3%A3o.m4a', dur: '3:46' },
  { title: 'Comunhão', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/482%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Comunh%C3%A3o.m4a', dur: '3:54' },
  { title: 'Ora, Vem Jesus', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/483%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Ora%2C%20Vem%20Jesus.m4a', dur: '3:24' },
  { title: 'Meus Pecados Levou', artist: 'Giselli Cristina', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/484%20-%20Giselli%20Cristina%20-%20Meus%20Pecados%20Levou.m4a', dur: '3:20' },
  { title: 'Andando para o Céu', artist: 'Trio Melodia', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/485%20-%20Trio%20Melodia%20-%20Andando%20para%20o%20C%C3%A9u.m4a', dur: '3:14' },
  { title: 'Vasos Transbordantes', artist: 'Claudio S Mattos', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/486%20-%20Claudio%20S%20Mattos%20-%20Vasos%20Transbordantes.m4a', dur: '2:45' },
  { title: 'Doxologia', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/487%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Doxologia.m4a', dur: '2:55' },
  { title: 'O Áureo Dia', artist: 'Jair Pires', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/488%20-%20Jair%20Pires%20-%20O%20%C3%81ureo%20Dia.m4a', dur: '2:58' },
  { title: 'Chegai Para Adorar', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/489%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Chegai%20Para%20Adorar.m4a', dur: '3:24' },
  { title: 'Passando Está', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/490%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Passando%20Est%C3%A1.m4a', dur: '3:50' },
  { title: 'Há Poder no Sangue de Jesus', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/491%20-%20Marcos%20Ant%C3%B4nio%20-%20Ha%20Poder%20no%20Sangue%20de%20Jesus.m4a', dur: '3:21' },
  { title: 'Jesus Virá do Céu', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/492%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Jesus%20Vir%C3%A1%20do%20C%C3%A9u.m4a', dur: '3:50' },
  { title: 'Ao Pai Voltai', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/493%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Ao%20Pai%20Voltai.m4a', dur: '3:46' },
  { title: 'Jerusalém Celestial', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/494%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Jerusal%C3%A9m%20Celestial.m4a', dur: '3:46' },
  { title: 'Cristo A Porta Está', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/495%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Cristo%20A%20Porta%20Est%C3%A1.m4a', dur: '3:52' },
  { title: 'Jesus Me Tirou da Lama', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/496%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Jesus%20Me%20Tirou%20da%20Lama.m4a', dur: '3:50' },
  { title: 'Meu Bom Salvador', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/497%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Meu%20Bom%20Salvador.m4a', dur: '3:40' },
  { title: 'Guia-Me Ó Salvador', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/498%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Guia-Me%20%C3%93%20Salvador.m4a', dur: '3:27' },
  { title: 'A Santa Bíblia', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/499%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20A%20Santa%20B%C3%ADblia.m4a', dur: '3:23' },
  { title: 'Quero Ver a Jesus Cristo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/500%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Quero%20Ver%20a%20Jesus%20Cristo.m4a', dur: '4:04' },
  { title: 'Vencendo Com o Bom Capitão', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/501%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Vencendo%20Com%20o%20Bom%20Capit%C3%A3o.m4a', dur: '4:08' },
  { title: 'Ó Pastor Bendito', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/502%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20%C3%93%20Pastor%20Bendito.m4a', dur: '2:10' },
  { title: 'Vidas Consagradas Ao Trabalho', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/503%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Vidas%20Consagradas%20Ao%20Trabalho.m4a', dur: '3:21' },
  { title: 'Momento Solene', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/504%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Momento%20Solene.m4a', dur: '4:11' },
  { title: 'As Palavras de Jesus', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/505%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20As%20Palavras%20de%20Jesus.m4a', dur: '2:16' },
  { title: 'Bíblia Sagrada', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/506%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20B%C3%ADblia%20Sagrada.m4a', dur: '2:53' },
  { title: 'Jesus Salva', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/507%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Jesus%20Salva.m4a', dur: '2:55' },
  { title: 'Sua Palavra Revelada', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/508%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Sua%20Palavra%20Revelada.m4a', dur: '2:53' },
  { title: 'Ao Passar o Jordão', artist: 'Mattos Nascimento', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/509%20-%20Mattos%20Nascimento%20-%20Ao%20Passar%20o%20Jord%C3%A3o.m4a', dur: '4:10' },
  { title: 'Riqueza Divinal', artist: 'Azenathy', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/510%20-%20Azenathy%20-%20Riqueza%20Divinal.m4a', dur: '4:47' },
  { title: 'Glorioso Deus', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/511%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Glorioso%20Deus.m4a', dur: '4:33' },
  { title: 'O Amor Inesgotável', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/512%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20O%20Amor%20Inesgot%C3%A1vel.m4a', dur: '4:41' },
  { title: 'Minha Alma Te Quer', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/513%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Minha%20Alma%20Te%20Quer.m4a', dur: '4:49' },
  { title: 'Em Glória Esplendente', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/514%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Em%20Gl%C3%B3ria%20Esplendente.m4a', dur: '5:24' },
  { title: 'Se Cristo Comigo Vai', artist: 'Cassiane', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/515%20-%20Cassiane%20-%20Se%20Cristo%20Comigo%20Vai.m4a', dur: '6:33' },
  { title: 'Cristo, Meu Vero Amigo', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/516%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Cristo%2C%20Meu%20Vero%20Amigo.m4a', dur: '3:39' },
  { title: 'Cura Divina', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/517%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Cura%20Divina.m4a', dur: '3:35' },
  { title: 'O Salva-Vidas', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/518%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20O%20Salva-Vidas.m4a', dur: '3:53' },
  { title: 'Achei Jesus, Meu Salvador', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/519%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20Achei%20Jesus%2C%20Meu%20Salvador.m4a', dur: '3:53' },
  { title: 'A Doce e Preciosa Voz', artist: 'Carlos José e a Harpa Cristã', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/520%20-%20Carlos%20Jos%C3%A9%20e%20a%20Harpa%20Crist%C3%A3%20-%20A%20Doce%20e%20Preciosa%20Voz.m4a', dur: '1:56' },
  { title: 'Vem o Passo Dar', artist: 'Leila Praxedes', genre: 'adoracao', src: 'https://archive.org/download/hinosharpa8/521%20-%20Leila%20Praxedes%20-%20Vem%20o%20Passo%20Dar.m4a', dur: '3:12' },
  
  // === GALILEU (Fernandinho) ===
  { title: 'Adestra', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Adestra.mp3', dur: '3:06' },
  { title: 'Batiza-Me', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Batiza-me.mp3', dur: '5:30' },
  { title: 'Cristo, Cordeiro de Deus', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Cristo%2C%20Cordeiro%20de%20Deus.mp3', dur: '3:36' },
  { title: 'Dono do Mundo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Dono%20do%20Mundo.mp3', dur: '5:12' },
  { title: 'Eu Jamais Serei o Mesmo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Eu%20Jamais%20Serei%20o%20Mesmo.mp3', dur: '4:48' },
  { title: 'Fogo Santo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Fogo%20Santo.mp3', dur: '2:36' },
  { title: 'Galileu', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Galileu.mp3', dur: '4:30' },
  { title: 'Hosana', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Hosana.mp3', dur: '3:36' },
  { title: 'Há Poder', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/H%C3%A1%20Poder.mp3', dur: '3:48' },
  { title: 'Luz do Mundo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Luz%20do%20Mundo.mp3', dur: '3:12' },
  { title: 'Ora Vem', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Ora%20Vem.mp3', dur: '2:42' },
  { title: 'Santa Euforia', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Santa%20Euforia.mp3', dur: '3:18' },
  { title: 'Seu Nome é Jesus', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Seu%20Nome%20%C3%A9%20Jesus.mp3', dur: '3:54' },
  { title: 'Superabundou a Graça', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Superabundou%20a%20Gra%C3%A7a.mp3', dur: '3:18' },
  { title: 'Yeshua', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/galileu/Yeshua.mp3', dur: '3:24' },
  
  // === MARCOS ANTÔNIO (gospel brasileiro) ===
  { title: 'Jesus Abriu A Porta', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/01JesusAbriuAPorta.mp3', dur: '3:00' },
  { title: 'Nem Tudo Acabou', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/02NemTudoAcabou.mp3', dur: '2:42' },
  { title: 'Jesus Não É Dinheiro', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/03JesusNoDinheiro.mp3', dur: '2:30' },
  { title: 'Conversa A Dois', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/04ConversaADois.mp3', dur: '3:12' },
  { title: 'O Inimigo Fugirá', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/05OInimigoFugir.mp3', dur: '3:06' },
  { title: 'Rasga-me Por Dentro', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/06Rasga-mePorDentro.mp3', dur: '2:36' },
  { title: 'Uma Chance', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/07UmaChance.mp3', dur: '3:30' },
  { title: 'O Escolhido', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/08OEscolhido.mp3', dur: '4:06' },
  { title: 'O Inimigo Fugirá (2)', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/09OInimigoFugir.mp3', dur: '3:48' },
  { title: 'Anjo Sem Asa', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/10AnjoSemAsa.mp3', dur: '3:24' },
  { title: 'Ligado', artist: 'Marcos Antônio', genre: 'adoracao', src: 'https://archive.org/download/MarcosAntonio/11Ligado.mp3', dur: '3:18' },
  
  // === FERNANDINHO - SANTO (álbum 2020) ===
  { title: 'Que Se Abram os Céus (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Abram%20Os%20C%C3%A9us%20%28Ao%20Vivo%29.mp3', dur: '4:36' },
  { title: 'Primeiro Amor (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ao%20Primeiro%20Amor%20%28Ao%20Vivo%29.mp3', dur: '3:54' },
  { title: 'Ao Teu Encontro / Manso e Suave (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ao%20Teu%20Encontro%20Manso%20e%20Suave%20%28Ao%20Vivo%29.mp3', dur: '7:36' },
  { title: 'Atraído', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Atra%C3%ADdo.mp3', dur: '3:24' },
  { title: 'Cria em Mim', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/CRIA%20EM%20MIM.mp3', dur: '3:48' },
  { title: 'Deus Não Está Morto (Bônus)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Deus%20N%C3%A3o%20Est%C3%A1%20Morto%20%28B%C3%B4nus%29.mp3', dur: '3:54' },
  { title: 'Eu Vou Amanhecer (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/EU%20VOU%20AMANHECER%20.mp3', dur: '4:48' },
  { title: 'Se Ele Está Comigo', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/Ele%20Est%C3%A1%20Comigo%20%28B%C3%B4nus%29.mp3', dur: '4:06' },
  { title: 'Fogo do Céu', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/FOGO%20DO%20C%C3%89U.mp3', dur: '5:48' },
  { title: 'O Senhor É Bom (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/O%20SENHOR%20%C3%89%20BOM.mp3', dur: '5:30' },
  { title: 'Quão Bom (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/QU%C3%83O%20BOM%20%5BAO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '7:00' },
  { title: 'Santo (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/SANTO%20%5BVERS%C3%83O%20AO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '6:48' },
  { title: 'Santos dos Santos', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/SANTOS%20DOS%20SANTOS%20FERNANDINHO%20NOVA%20M%C3%9ASICA%202020.mp3', dur: '1:54' },
  { title: 'Yahweh', artist: 'Fernandinho e Paula', genre: 'adoracao', src: 'https://archive.org/download/santo2020/YAHWEH.mp3', dur: '3:48' },
  { title: 'É Proibido (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/%C3%89%20Proibido%20%28Ao%20Vivo%29.mp3', dur: '6:00' },
  { title: 'É Tempo de Abrir o Coração (Ao Vivo)', artist: 'Fernandinho', genre: 'adoracao', src: 'https://archive.org/download/santo2020/%C3%89%20TEMPO%20DE%20ABRIR%20O%20CORA%C3%87%C3%83O%20%5BAO%20VIVO%20-%20NOVO%20%C3%81LBUM%5D.mp3', dur: '6:12' },
  
  // === LOUVORES CANTADOS (100 Melhores de Louvores - Archive.org) ===
  { title: 'Estrela da Manhã', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/001-EstrelaDaManhhighQuality.mp3', dur: '3:30' },
  { title: 'Alegria', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/002-AlegriahighQuality.mp3', dur: '4:48' },
  { title: 'Adorador', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/003-AdoradorhighQuality.mp3', dur: '3:24' },
  { title: 'Nunca Pare de Lutar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/004-NuncaPareDeLutarhighQuality.mp3', dur: '4:06' },
  { title: 'Não Posso Te Deixar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/005-NoPossoTeDeixarhighQuality.mp3', dur: '3:42' },
  { title: 'Ouro, Incenso e Mirra', artist: 'Gospel', genre: 'classico', src: 'https://archive.org/download/100MelhoresDeLouvores/007-OuroIncensoEMirrahighQuality.mp3', dur: '4:24' },
  { title: 'Vencer ou Vencer', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/008-VencerOuVencerhighQuality.mp3', dur: '4:12' },
  { title: 'Seguirei', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/011-SeguireihighQuality.mp3', dur: '4:48' },
  { title: 'Filhos do Homem', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/012-FilhosDoHmoemhighQuality.mp3', dur: '4:36' },
  { title: 'Fernanda Brum', artist: 'Fernanda Brum', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/016-FernandaBrumMusicahighQuality.mp3', dur: '5:36' },
  { title: 'Tua Presença', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/017-TuaPresenahighQuality.mp3', dur: '6:24' },
  { title: 'I Will Lift My Eyes', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/019-IWillLiftMyEyeshighQuality.mp3', dur: '5:24' },
  { title: 'Não Haverá Impossível', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/020-NoHaverImpossvelhighQuality.mp3', dur: '7:00' },
  { title: 'Aos Pés da Cruz', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/021-AosPsDaCruzhighQuality.mp3', dur: '3:36' },
  { title: 'Filho de Davi', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/022-FilhoDeDavihighQuality.mp3', dur: '7:12' },
  { title: 'Maior É Jesus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/023-MaiorJesushighQuality.mp3', dur: '6:00' },
  { title: 'Hillsong - Diante da Cruz', artist: 'Hillsong', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/024-hillsong-DianteDaCruz10highQuality.mp3', dur: '9:12' },
  { title: 'Eu Vou Lutar', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/025-EuVouLutarhighQuality.mp3', dur: '5:00' },
  { title: 'Olha Pra Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/027-OlhaPraMimhighQuality.mp3', dur: '5:00' },
  { title: 'Deus Cuida de Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/028-DeusCuidaDeMimhighQuality.mp3', dur: '5:24' },
  { title: 'A Solução', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/030-aSoluohighQuality.mp3', dur: '3:36' },
  { title: 'Correndo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/031-CorrendohighQuality.mp3', dur: '7:24' },
  { title: 'Sem Você Não Dá', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/032-SemVocNoDhighQuality.mp3', dur: '6:00' },
  { title: 'Coração Valente', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/033-CoraoValentehighQuality.mp3', dur: '5:04' },
  { title: 'Perto de Deus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/034-PertoDeDeushighQuality.mp3', dur: '3:36' },
  { title: 'Desejo do Meu Coração', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/035-DesejoDoMeuCoraohighQuality.mp3', dur: '7:48' },
  { title: 'Espelho Mágico', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/037-EspelhoMgicohighQuality.mp3', dur: '5:48' },
  { title: 'Derrama A Tua Glória', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/038-DerramaATuaGlriahighQuality.mp3', dur: '4:00' },
  { title: 'Espirito Santo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/040-EspiritoSantohighQuality.mp3', dur: '5:00' },
  { title: 'Mostra Tua Força', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/041-MostraTuaForahighQuality.mp3', dur: '4:24' },
  { title: 'Toque No Altar', artist: 'Toque No Altar', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/042-ToqueNoAltar-ToqueNoAltarhighQuality.mp3', dur: '3:48' },
  { title: 'Autor Da Vida', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/043-AutorDaVidahighQuality.mp3', dur: '7:12' },
  { title: 'Sei que não sou Merecedor', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/044-SeiQueNaoSouMerecedorhighQuality.mp3', dur: '8:24' },
  { title: 'Deus de Promessa', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/045-DeusDePromessahighQuality.mp3', dur: '10:12' },
  { title: 'Eis-Me Aqui', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/046-Eis-meAquihighQuality.mp3', dur: '6:24' },
  { title: 'Casa de Davi, Casa de Oração', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/047-casaDeDaviCasaDeOraohighQuality.mp3', dur: '3:12' },
  { title: 'Sua Presença é Real', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/048-suaPresenaRealhighQuality.mp3', dur: '7:48' },
  { title: 'Sonda-me, Usa-me', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/050-Sonda-meUsa-mehighQuality.mp3', dur: '7:24' },
  { title: 'O Que Há de Melhor em Mim', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/051-OQueHDeMelhorEmMimhighQuality.mp3', dur: '4:48' },
  { title: 'Elias Silva Conte comigo', artist: 'Elias Silva', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/053-EliasSilvaConteComigohighQuality.mp3', dur: '4:00' },
  { title: 'Acenda Uma Luz', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/054-AcendaUmaLuzhighQuality.mp3', dur: '6:24' },
  { title: 'Acredita', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/055-AcreditahighQuality.mp3', dur: '4:48' },
  { title: 'Move as Águas', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/056-moveAsguashighQuality.mp3', dur: '4:48' },
  { title: 'A Fé Faz o Herói', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/057-AFFazOHerihighQuality.mp3', dur: '5:04' },
  { title: 'Quero Ser', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/058-QueroSerhighQuality.mp3', dur: '4:36' },
  { title: 'Signs', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/059-SignshighQuality.mp3', dur: '5:48' },
  { title: 'Eu Quero Ser Santo', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/061-EuQueroSerSantohighQuality.mp3', dur: '5:04' },
  { title: 'Somente Deus', artist: 'Gospel', genre: 'adoracao', src: 'https://archive.org/download/100MelhoresDeLouvores/063-SomenteDeushighQuality.mp3', dur: '4:36' },
  
  // === LOUVORES CANTADOS (músicas reais - Country Gospel [Madacy]) ===
  { title: 'Amazing Grace', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/01%20Amazing%20Grace.mp3', dur: '2:54' },
  { title: 'Whispering Hope', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/02%20Whispering%20Hope.mp3', dur: '4:54' },
  { title: 'Wings of a Dove', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/03%20Wings%20of%20a%20Dove.mp3', dur: '3:20' },
  { title: 'One Day at a Time', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/04%20One%20Day%20at%20a%20Time.mp3', dur: '4:18' },
  { title: 'What a Friend We Have in Jesus', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/05%20What%20a%20Friend%20We%20Have%20in%20Jesus.mp3', dur: '4:06' },
  { title: 'In the Garden', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/06%20In%20the%20Garden.mp3', dur: '3:48' },
  { title: 'Just a Closer Walk With Thee', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/07%20Just%20a%20Closer%20Walk%20With%20Thee.mp3', dur: '3:42' },
  { title: "You'll Never Walk Alone", artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/08%20You%27ll%20Never%20Walk%20Alone.mp3', dur: '3:42' },
  { title: 'Oh Happy Day', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/09%20Oh%20Happy%20Day.mp3', dur: '5:18' },
  { title: "Life's Railway to Heaven", artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/10%20Life%27s%20Railway%20to%20Heaven.mp3', dur: '4:06' },
  { title: 'Why Me Lord?', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/11%20Why%20Me%20Lord-.mp3', dur: '4:48' },
  { title: 'Will the Circle Be Unbroken', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/12%20Will%20the%20Circle%20Be%20Unbroken.mp3', dur: '3:42' },
  
  // === OUTROS LOUVORES CANTADOS ===
  { title: 'Amazing Grace (Worshipped)', artist: 'Abang Jedidiah', genre: 'adoracao', src: 'https://archive.org/download/amazing-grace-worshipped_202111/Amazing%20Grace%20-%20Worshipped.mp3', dur: '5:15' },
  { title: 'You Are Life', artist: 'Hillsong Worship (cover)', genre: 'adoracao', src: 'https://archive.org/download/youarelifehillsongworship/You%20Are%20Life%20-%20Hillsong%20Worship.mp3', dur: '4:30' },
  { title: 'Amazing Grace', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/01%20Amazing%20Grace.mp3', dur: '2:54' },
  { title: 'Whispering Hope', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/02%20Whispering%20Hope.mp3', dur: '4:54' },
  { title: 'Wings of a Dove', artist: 'Country Gospel', genre: 'classico', src: 'https://archive.org/download/09-oh-happy-day/03%20Wings%20of%20a%20Dove.mp3', dur: '3:20' },
  { title: 'One Day at a Time', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/04%20One%20Day%20at%20a%20Time.mp3', dur: '4:18' },
  { title: 'What a Friend We Have in Jesus', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/05%20What%20a%20Friend%20We%20Have%20in%20Jesus.mp3', dur: '4:06' },
  { title: 'In the Garden', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/06%20In%20the%20Garden.mp3', dur: '3:48' },
  { title: 'Just a Closer Walk With Thee', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/07%20Just%20a%20Closer%20Walk%20With%20Thee.mp3', dur: '3:42' },
  { title: "You'll Never Walk Alone", artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/08%20You%27ll%20Never%20Walk%20Alone.mp3', dur: '3:42' },
  { title: 'Oh Happy Day', artist: 'Country Gospel', genre: 'adoracao', src: 'https://archive.org/download/09-oh-happy-day/09%20Oh%20Happy%20Day.mp3', dur: '5:18' },
  { title: "Life's Railway to Heaven", artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/10%20Life%27s%20Railway%20to%20Heaven.mp3', dur: '4:06' },
  { title: 'Why Me Lord?', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/11%20Why%20Me%20Lord-.mp3', dur: '4:48' },
  { title: 'Will the Circle Be Unbroken', artist: 'Country Gospel', genre: 'sertanejo', src: 'https://archive.org/download/09-oh-happy-day/12%20Will%20the%20Circle%20Be%20Unbroken.mp3', dur: '3:42' },
  
  // === OUTROS LOUVORES CANTADOS ===
  { title: 'Amazing Grace (Worshipped)', artist: 'Abang Jedidiah', genre: 'adoracao', src: 'https://archive.org/download/amazing-grace-worshipped_202111/Amazing%20Grace%20-%20Worshipped.mp3', dur: '5:15' },
  { title: 'You Are Life', artist: 'Hillsong Worship (cover)', genre: 'adoracao', src: 'https://archive.org/download/youarelifehillsongworship/You%20Are%20Life%20-%20Hillsong%20Worship.mp3', dur: '4:30' },
  




];

// ---------- Vinhetas da rádio ----------
const VIGNETTES = [
  { title: 'Vinheta de Abertura', desc: 'Identificação da rádio', src: 'https://archive.org/download/09-oh-happy-day/01%20Amazing%20Grace.mp3', dur: '0:15' },
  { title: 'Vinheta Institucional', desc: 'Quem somos', src: 'https://archive.org/download/09-oh-happy-day/02%20Whispering%20Hope.mp3', dur: '0:20' },
  { title: 'Vinheta de Programa', desc: 'Anúncio de atração', src: 'https://archive.org/download/09-oh-happy-day/03%20Wings%20of%20a%20Dove.mp3', dur: '0:12' },
  { title: 'Vinheta de Encerramento', desc: 'Despedida', src: 'https://archive.org/download/09-oh-happy-day/04%20One%20Day%20at%20a%20Time.mp3', dur: '0:18' },
  { title: 'Chamada para Pedidos', desc: 'Peça sua música', src: 'https://archive.org/download/09-oh-happy-day/05%20What%20a%20Friend%20We%20Have%20in%20Jesus.mp3', dur: '0:22' },
  { title: 'Vinhetão (sweep)', desc: 'Transição entre blocos', src: 'https://archive.org/download/09-oh-happy-day/06%20In%20the%20Garden.mp3', dur: '0:08' },
];

// ---------- Elementos ----------
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeEl = document.getElementById('volume');
const boostEl = document.getElementById('boost');
const boostValEl = document.getElementById('boostVal');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const trackGenre = document.getElementById('trackGenre');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');
const trackCount = document.getElementById('trackCount');
const statusText = document.getElementById('statusText');
const listenersEl = document.getElementById('listeners');
const prayerForm = document.getElementById('prayerForm');
const prayerList = document.getElementById('prayerList');
const vignetteGrid = document.getElementById('vignetteGrid');
const filterButtons = document.getElementById('filterButtons');

// ---------- Estado ----------
let currentList = [...LIBRARY];
let currentIndex = 0;
let isPlaying = false;
let currentFilter = 'all';

// ---------- Web Audio API (apenas para teste de som - beep) ----------
// NOTA: NÃO usamos MediaElementAudioSourceNode no elemento de áudio principal,
// pois isso redireciona o áudio para o grafo Web Audio e pode causar
// silêncio em alguns navegadores/dispositivos.
// O volume é controlado nativamente pelo elemento <audio>.

// ---------- Helpers ----------
function formatTime(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

const GENRE_LABELS = {
  sertanejo: 'Sertanejo Gospel',
  mpb: 'MPB Gospel',
  classico: 'Clássico',
  orquestrado: 'Orquestrado',
  adoracao: 'Adoração',
  vinheta: 'Vinheta',
};

const GENRE_COLORS = {
  sertanejo: '#e8a838',
  mpb: '#4caf50',
  classico: '#9c27b0',
  orquestrado: '#2196f3',
  adoracao: '#ff5722',
  vinheta: '#607d8b',
};

// ---------- Render playlist ----------
function renderPlaylist() {
  playlistEl.innerHTML = '';
  currentList.forEach((t, i) => {
    const li = document.createElement('li');
    li.dataset.index = i;
    if (i === currentIndex) li.classList.add('active');
    const color = GENRE_COLORS[t.genre] || '#888';
    li.innerHTML = `
      <span class="idx">${(i + 1).toString().padStart(2, '0')}</span>
      <span class="title">${t.title} <span style="color:var(--muted)">— ${t.artist}</span></span>
      <span class="genre-dot" style="background:${color}" title="${GENRE_LABELS[t.genre]}"></span>
      <span class="dur">${t.dur}</span>
    `;
    li.addEventListener('click', () => loadTrack(i, true));
    playlistEl.appendChild(li);
  });
  trackCount.textContent = `${currentList.length} faixas`;
}

// ---------- Carregar faixa ----------
function loadTrack(index, autoplay = false) {
  if (currentList.length === 0) return;
  currentIndex = (index + currentList.length) % currentList.length;
  const track = currentList[currentIndex];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackGenre.textContent = GENRE_LABELS[track.genre] || '';
  trackGenre.style.background = GENRE_COLORS[track.genre] || '#888';
  cover.classList.remove('playing');
  progressFill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = track.dur;

  renderPlaylist();

  if (autoplay) {
    audio.volume = parseFloat(volumeEl.value) || 1;
    audio.play().then(() => {
      isPlaying = true;
      updatePlayButton();
      cover.classList.add('playing');
      statusText.textContent = 'Tocando: ' + track.title;
    }).catch(err => {
      statusText.textContent = 'Clique em ▶ para iniciar (navegador bloqueia autoplay).';
      console.warn(err);
    });
  }
}

function updatePlayButton() {
  playBtn.textContent = isPlaying ? '⏸' : '▶';
}

// ---------- Controles ----------
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updatePlayButton();
    cover.classList.remove('playing');
    statusText.textContent = 'Pausado';
  } else {
    // Configura Web Audio API na primeira interação (necessário para mobile)
    audio.volume = parseFloat(volumeEl.value) || 1;
    isPlaying = true;
    updatePlayButton();
    const p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        cover.classList.add('playing');
        statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
      }).catch(err => {
        isPlaying = false;
        updatePlayButton();
        cover.classList.remove('playing');
        if (err && err.name === 'AbortError') {
          // Tentativa interrompida por recarregamento; tenta novamente
          setTimeout(() => {
            audio.play().then(() => {
              isPlaying = true;
              updatePlayButton();
              cover.classList.add('playing');
              statusText.textContent = 'Tocando: ' + currentList[currentIndex].title;
            }).catch(e => console.warn(e));
          }, 300);
        } else {
          statusText.textContent = 'Não foi possível tocar. Verifique a conexão.';
          console.warn(err);
        }
      });
    }
  }
});

prevBtn.addEventListener('click', () => loadTrack(currentIndex - 1, isPlaying));
nextBtn.addEventListener('click', () => loadTrack(currentIndex + 1, isPlaying));

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

audio.addEventListener('ended', () => {
  loadTrack(currentIndex + 1, true);
});

audio.addEventListener('error', (e) => {
  console.error('Audio error:', e, audio.error);
  statusText.textContent = 'Erro ao carregar a faixa. Pulando para a próxima...';
  isPlaying = false;
  updatePlayButton();
  cover.classList.remove('playing');
  // Auto-skip after 1.5s
  setTimeout(() => loadTrack(currentIndex + 1, true), 1500);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
});

volumeEl.addEventListener('input', () => {
  audio.volume = parseFloat(volumeEl.value);
});

boostEl.addEventListener('input', () => {
  const val = parseFloat(boostEl.value);
  boostValEl.textContent = val.toFixed(1) + 'x';
  // Sem Web Audio API, o boost é limitado a 1.0 (volume máximo do elemento)
  // Para boost real, seria necessário Web Audio API (causa problemas em mobile)
  const vol = parseFloat(volumeEl.value) || 1;
  audio.volume = Math.min(1, vol * val);
});

// ---------- Filtro por gênero ----------
filterButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterButtons.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.genre;
  if (currentFilter === 'all') {
    currentList = [...LIBRARY];
  } else {
    currentList = LIBRARY.filter(t => t.genre === currentFilter);
  }
  currentIndex = 0;
  loadTrack(0, false);
  statusText.textContent = currentFilter === 'all'
    ? `Mostrando toda a biblioteca (${currentList.length} faixas).`
    : `Filtrado: ${GENRE_LABELS[currentFilter]} (${currentList.length} faixas).`;
});

// ---------- Vinhetas ----------
function renderVignettes() {
  vignetteGrid.innerHTML = '';
  VIGNETTES.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vignette-item';
    card.innerHTML = `
      <div class="v-icon">🎙️</div>
      <div class="v-info">
        <strong>${v.title}</strong>
        <span>${v.desc}</span>
      </div>
      <span class="v-dur">${v.dur}</span>
      <button class="v-play" data-index="${i}">▶</button>
    `;
    vignetteGrid.appendChild(card);
  });
}

vignetteGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.v-play');
  if (!btn) return;
  const idx = parseInt(btn.dataset.index);
  const v = VIGNETTES[idx];
  // Toca a vinheta sem alterar a playlist principal
  const wasPlaying = isPlaying;
  const prevSrc = audio.src;
  const prevIndex = currentIndex;
  audio.volume = parseFloat(volumeEl.value) || 1;
  audio.src = v.src;
  trackTitle.textContent = v.title;
  trackArtist.textContent = 'Vinheta da Rádio';
  trackGenre.textContent = 'Vinheta';
  trackGenre.style.background = GENRE_COLORS.vinheta;
  audio.play().then(() => {
    statusText.textContent = 'Tocando vinheta: ' + v.title;
  }).catch(err => console.warn(err));
  audio.onended = () => {
    audio.onended = () => loadTrack(currentIndex + 1, true);
    if (wasPlaying && prevSrc) {
      audio.src = prevSrc;
      loadTrack(prevIndex, true);
    }
  };
});

// ---------- Pedidos de oração (localStorage) ----------
function loadPrayers() {
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  prayerList.innerHTML = '';
  saved.slice().reverse().forEach(p => {
    const div = document.createElement('div');
    div.className = 'prayer-item';
    div.innerHTML = `<div class="name">${escapeHtml(p.name || 'Anônimo')}</div><div class="text">${escapeHtml(p.text)}</div>`;
    prayerList.appendChild(div);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

prayerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('prayerName').value.trim();
  const text = document.getElementById('prayerText').value.trim();
  if (!text) return;
  const saved = JSON.parse(localStorage.getItem('prayers') || '[]');
  saved.push({ name, text, date: new Date().toISOString() });
  localStorage.setItem('prayers', JSON.stringify(saved));
  document.getElementById('prayerText').value = '';
  document.getElementById('prayerName').value = '';
  loadPrayers();
});

// ---------- Ouvintes (simulado) ----------
function updateListeners() {
  const base = 12;
  const variation = Math.floor(Math.random() * 8);
  listenersEl.textContent = base + variation;
}
setInterval(updateListeners, 5000);

// ---------- Teste de Som (Web Audio API) ----------
const testSoundBtn = document.getElementById('testSoundBtn');
const testSoundStatus = document.getElementById('testSoundStatus');
const diagInfo = document.getElementById('diagInfo');
const refreshDiag = document.getElementById('refreshDiag');

function playTestBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Retoma o contexto (necessário em mobile)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 440; // Lá (A4)
    gain.gain.value = 0.5;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    testSoundStatus.textContent = '🔊 Tocando beep de teste (440 Hz)...';
    testSoundStatus.style.color = '#4caf50';
    setTimeout(() => {
      osc.stop();
      ctx.close();
      testSoundStatus.textContent = '✅ Beep concluído. Se você ouviu, seu navegador produz som!';
      testSoundStatus.style.color = '#4caf50';
    }, 1000);
  } catch (e) {
    testSoundStatus.textContent = '❌ Erro ao gerar som: ' + e.message;
    testSoundStatus.style.color = '#ff4d6d';
    console.error(e);
  }
}

testSoundBtn.addEventListener('click', playTestBeep);

// Fechar banner de diagnóstico
const closeBanner = document.getElementById('closeBanner');
const diagBanner = document.getElementById('diagBanner');
if (closeBanner && diagBanner) {
  closeBanner.addEventListener('click', () => {
    diagBanner.style.display = 'none';
  });
}

// ---------- Diagnóstico de Áudio ----------
function updateDiag() {
  const a = audio;
  const lines = [
    'src: ' + (a.src || '(vazio)'),
    'paused: ' + a.paused,
    'currentTime: ' + a.currentTime.toFixed(2) + 's',
    'duration: ' + (isFinite(a.duration) ? a.duration.toFixed(2) + 's' : 'N/A'),
    'readyState: ' + a.readyState + ' (0=vazio,1=metadata,2=atual,3=futuro,4=suficiente)',
    'volume: ' + a.volume,
    'muted: ' + a.muted,
    'networkState: ' + a.networkState + ' (0=vazio,1=ocioso,2=carregando,3=sem fonte)',
    'error: ' + (a.error ? a.error.code + ' - ' + a.error.message : 'nenhum'),
    'isPlaying (estado): ' + isPlaying,
    'navigator.userAgent: ' + navigator.userAgent.slice(0, 80),
  ];
  diagInfo.textContent = lines.join('\n');
}

refreshDiag.addEventListener('click', updateDiag);
setInterval(updateDiag, 2000);

// ---------- Seletor de arquivos MP3 (local) ----------
const fileInput = document.getElementById('fileInput');
const fileCount = document.getElementById('fileCount');
const dropZone = document.getElementById('dropZone');

// Contador de arquivos locais adicionados
let localFileCount = 0;

function addLocalFiles(files) {
  let added = 0;
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('audio/') && !file.name.toLowerCase().endsWith('.mp3')) return;
    
    const url = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, ''); // Remove extensão
    
    LIBRARY.push({
      title: name,
      artist: 'Arquivo local',
      genre: 'adoracao',
      src: url,
      dur: '--:--',
      isLocal: true,
    });
    added++;
  });
  
  if (added > 0) {
    localFileCount += added;
    if (fileCount) {
      fileCount.textContent = `${localFileCount} arquivo(s) local(is)`;
    }
    // Recarrega a playlist mantendo o filtro atual
    if (currentFilter === 'all') {
      currentList = [...LIBRARY];
    } else {
      currentList = LIBRARY.filter(t => t.genre === currentFilter);
    }
    renderPlaylist();
    statusText.textContent = `${added} música(s) adicionada(s) do computador!`;
  }
}

if (fileInput) {
  fileInput.addEventListener('change', (e) => {
    addLocalFiles(e.target.files);
    fileInput.value = ''; // Reset para permitir selecionar os mesmos arquivos novamente
  });
}

// Drag & Drop
if (dropZone) {
  dropZone.addEventListener('click', () => {
    if (fileInput) fileInput.click();
  });
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('drag-over');
  });
  
  dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addLocalFiles(e.dataTransfer.files);
    }
  });
}

// ---------- Init ----------
// Garante que o áudio não esteja mutado (importante para mobile)
audio.muted = false;
audio.volume = parseFloat(volumeEl.value) || 1;
renderPlaylist();
renderVignettes();
loadTrack(0);
updateListeners();
loadPrayers();
updateDiag();
statusText.textContent = `Pronto! ${LIBRARY.length} louvores + ${VIGNETTES.length} vinhetas. Clique em ▶ para ouvir.`;

// ---------- PWA: Service Worker ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((registration) => {
      console.log('Service Worker registrado:', registration.scope);
    }).catch((error) => {
      console.log('Service Worker falhou:', error);
    });
  });
}

// ---------- PWA: Install Prompt ----------
let deferredPrompt = null;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const dismissInstall = document.getElementById('dismissInstall');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBanner) {
    installBanner.style.display = 'flex';
  }
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Instalação:', outcome);
      deferredPrompt = null;
      if (installBanner) {
        installBanner.style.display = 'none';
      }
    }
  });
}

if (dismissInstall) {
  dismissInstall.addEventListener('click', () => {
    if (installBanner) {
      installBanner.style.display = 'none';
    }
  });
}

window.addEventListener('appinstalled', () => {
  console.log('PWA instalado com sucesso!');
  if (installBanner) {
    installBanner.style.display = 'none';
  }
});