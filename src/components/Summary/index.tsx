import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income img" />
                </header>
                <strong>10000</strong>
            </div>
            <div>
                <header>
                    <p>Expenses</p>
                    <img src={outcomeImg} alt="Expenses img" />
                </header>
                <strong>10000</strong>
            </div>
            <div className="background-highlight">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total img" />
                </header>
                <strong>10000</strong>
            </div>

        </Container>
    )
}