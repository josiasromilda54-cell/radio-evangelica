// ============================================================
// Rádio Vida Nova — Player, Biblioteca & Vinhetas
// 100% gratuito. Substitua as URLs pelos seus arquivos MP3.
// ============================================================

// ---------- Biblioteca de louvores ----------
// genre: sertanejo | mpb | classico | orquestrado | adoracao | vinheta
const LIBRARY = [

  // === MICHAEL W. SMITH - A New Hallelujah (Deluxe Edition) ===
  { title: 'Prepare Ye The Way', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc101-PrepareYeTheWaydigitalEdit.mp3', dur: '4:00' },
  { title: 'A New Hallelujah', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc102-ANewHallelujahdigitalEditfeaturingTheAfricanChildrensChoir.mp3', dur: '4:00' },
  { title: 'When I Think Of You', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc103-WhenIThinkOfYoudigitalEditfeaturingTheAfricanChildrensChoir.mp3', dur: '3:00' },
  { title: 'Mighty To Save', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc104-MightyToSavedigitalEdit.mp3', dur: '6:00' },
  { title: 'Shout Unto God', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc105-ShoutUntoGoddigitalEdit.mp3', dur: '2:24' },
  { title: 'Amazing Grace (My Chains Are Gone)', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc106-AmazingGracemyChainsAreGonedigitalEdit.mp3', dur: '4:24' },
  { title: 'Deep In Love With You', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc107-DeepInLoveWithYou.mp3', dur: '4:36' },
  { title: 'Healing Rain / Let It Rain', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc108-HealingRain_LetItRain.mp3', dur: '2:24' },
  { title: 'Majesty', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc109-Majesty.mp3', dur: '3:00' },
  { title: 'I Surrender All', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc110-ISurrenderAllwithSpecialGuestCoaloZamorano.mp3', dur: '2:42' },
  { title: 'Grace', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc111-Grace.mp3', dur: '3:06' },
  { title: 'Help Is On The Way', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc113-HelpIsOnTheWaywithSpecialGuestIsraelHoughton.mp3', dur: '3:42' },
  { title: 'The River Is Rising', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc114-TheRiverIsRising.mp3', dur: '4:00' },
  { title: 'Oh Draw Me Lord (Draw Me Near)', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc201-OhDrawMeLorddrawMeNear.mp3', dur: '1:54' },
  { title: 'Love In His Right Hand', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc202-LoveInHisRightHand.mp3', dur: '2:48' },
  { title: 'A New Hallelujah (Radio Version)', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc203-ANewHallelujahradioVersion.mp3', dur: '3:06' },
  { title: 'A New Hallelujah (Live Radio Edit)', artist: 'Michael W. Smith', genre: 'adoracao', src: 'https://archive.org/download/ANewHallelujahdeluxeEdition/disc204-ANewHallelujahliveRadioEdit.mp3', dur: '3:18' },
  
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

// ---------- PWA: Service Worker (desabilitado - causava cache de versão antiga) ----------
// O Service Worker foi desabilitado para evitar problemas de cache.
// A rádio funciona normalmente sem ele. O manifest.json ainda permite instalação como app.

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