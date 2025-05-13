export default function Home() {
  return (
    <>
    <header>
      <img className="logo" src="/piggy-bank.svg" alt="Logo" width={40} height={40}/>
      <img 
        className="button" 
        src="/circle-plus.svg" 
        alt="Button" 
        width={32} 
        height={32} 
      />
    </header>
    <section className="cards">
      <div className="card1">
        <h1>
          Entradas
          <img src="/banknote-arrow-down.svg" alt="Graphic"/>
        </h1>
        <h2>R$ 7.840,56</h2>
        <h3>Somadas todas as entradas do período</h3>
      </div>
      <div className="card2">
        <h1>
          Saldos
          <img src="/banknote-arrow-up.svg" alt="Graphic"/>
        </h1>
        <h2>R$ 1.580,45</h2>
        <h3>Somados todos os saldos do período</h3>
      </div>
      <div className="card3">
        <h1>
          Balanço
          <img src="/banknote-arrow-down.svg" alt="Graphic"/>
        </h1>
        <h2>R$ 6.260,11</h2>
        <h3>Somadas todas as entradas e saídas do período</h3>
      </div>
    </section>
    <div className="titles">
      <h1>Análise</h1>
      <h2>Categorias</h2>
    </div>
    <div className="graphics">
      <div className="graphic1"></div>
      <div className="graphic2">
        <div className="graphic2-1">
          <div className="icone">
            <img src="/cooking-pot.svg" alt="Graphic"/>
          </div>
          <div className="text1">Alimentação</div>
          <div className="text2">10</div>
          <div className="text3">R$ 1.508,15</div>
        </div>
        <div className="graphic2-2">
          <div className="icone1">
            <img src="/shopping-basket.svg" alt="Graphic"/>
          </div>
          <div className="text4">Mercado</div>
          <div className="text5">8</div>
          <div className="text6">R$ 508,90</div>
        </div>
        <div className="graphic2-3">
          <div className="icone2">
            <img src="/cooking-pot.svg" alt="Graphic"/>
          </div>
          <div className="text7">Alimentação</div>
          <div className="text8">10</div>
          <div className="text9">R$ 1.508,15</div>
        </div>
        <div className="graphic2-4">
          <div className="icone3">
            <img src="/cooking-pot.svg" alt="Graphic"/>
          </div>
          <div className="text10">Alimentação</div>
          <div className="text11">10</div>
          <div className="text12">R$ 1.508,15</div>
        </div>
        <div className="graphic2-5">
          <div className="icone4">
            <img src="/cooking-pot.svg" alt="Graphic"/>
          </div>
          <div className="text13">Alimentação</div>
          <div className="text14">10</div>
          <div className="text15">R$ 1.508,15</div>
        </div>
        <div className="graphic2-6">
          <div className="icone5">
            <img src="/cooking-pot.svg" alt="Graphic"/>
          </div>
          <div className="text16">Alimentação</div>
          <div className="text17">10</div>
          <div className="text18">R$ 1.508,15</div>
        </div>
      </div>
    </div>
    <div className="title">
      <h1>Transações</h1>
    </div>
    <div className="subtitle">
      <h1>Descrição</h1>
      <h2>Tipo</h2>
      <h3>Valor</h3>
      <h4>Banco</h4>
      <h5>Data</h5>
      <h6>Parcelas</h6>
    </div>
    <div className="graphic3">
          <div className="icone6">
            <img src="/shopping-basket-16.svg" alt="Graphic"/>
          </div>
          <div className="text19">Supermercado Big Master</div>
          <div className="text20">Crédito</div>
          <div className="text21">R$ 896,00</div>
          <div className="text22">Nubank</div>
          <div className="text23">21/03/2024</div>
          <div className="text24">1/1</div>
    </div>
    <div className="graphic4">
          <div className="icone7">
            <img src="/shopping-basket-16.svg" alt="Graphic"/>
          </div>
          <div className="text25">Supermercado Big Master</div>
          <div className="text26">Crédito</div>
          <div className="text27">R$ 896,00</div>
          <div className="text28">Nubank</div>
          <div className="text29">21/03/2024</div>
    </div>
    </>
  )
}