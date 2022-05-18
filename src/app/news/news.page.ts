import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public news = [
    {title:"Pão volta a ser a comida mais apreciada no mundo!", description:"Como todos sabemos pão é uma das melhores comidas do mundo, porém desde a sua criação que tem sido estragado ao meter-se algo que não seja manteiga, fiambre, torresmos, entre outros.", year:'2022', image:'https://www.seriouseats.com/thmb/zt2uPceCGgDY7TjetsQy74LL4aE=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg', icon:''},
    {title:"Tiago Costa iludido!", description:"Individuo Tiago Costa suspeito de divulgar noticias falsas com justifica de acreditar no impossivel.", year:'2022', image:'https://classic.exame.com/wp-content/uploads/2021/11/Fallen.jpg?quality=70&strip=info&w=793', icon:''},
    {title:"EA ganha o título de pior impresa do mundo pela terceira vez!", description:" Tal como em 2013 e 2016, EA volta a conquistar o seu tão merecido título de pior empresa do mundo em geral.", year:'2022', image:'https://psverso.com.br/wp-content/uploads/2020/01/EA-planeja-lancar-14-jogos-antes-de-abril-de-2021-esta-pronta-para-liderar-nos-consoles-de-proxima-geracao.jpg', icon:''},
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
