export default function Home() {
  return (
    <>
    <header>
      <img className="logo" src="/piggy-bank.svg" alt="Logo" width={40} height={40}/>
      <img className="button" src="/circle-plus.svg" alt="Button" width={32} height={32}/>
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
      <h1>Análises</h1>
      <h2>Categorias</h2>
    </div>
    <div className="graphics">
      <div className="graphic1"></div>
      <div className="graphic2"></div>
    </div>
    </>
  )
}