import './modal.css';
import { X } from 'lucide-react';
import Link from "next/link";

export default function modal() {
    return (
        <section>
            <div className='one'>
                <div className='one-1'>
                    <h1>Nova Transação</h1>
                    <h2>Inclua suas entradas e saídas sem complicações</h2>
                </div>
                <button className='return'>
                    <Link href='home'>  
                        <X color="white" size={24}/>
                    </Link>
                </button>
            </div>
            <div className='two'>
                <h1>Descrição da transação</h1>
                <div className='two-1'>
                    <h1>Espetinho</h1>
                </div>
            </div>
            <div className='three'>
                <h1>Categoria</h1>
                <div className='three-1'>
                    <h1>Alimentação</h1>
                </div>
            </div>
            <div className='four'>
                <h1>Valor</h1>
                <div className='four-1'>
                    <h1>30,00</h1>
                </div>
            </div>
            <div className='five'>
                <h1>Data</h1>
                <div className='five-1'>
                    <h1>21/03/2025</h1>
                </div>
            </div>
            <div className='six'>
                <h1>Banco</h1>
                <div className='six-1'>
                    <h1>BANCO BTG PACTUAL S.A.</h1>
                </div>
            </div>
            <div className='botoes'>
                <button className='botao1'>Cancelar</button>
                <button className='botao2'>Confirmar</button>
            </div>
        </section>
    )
}