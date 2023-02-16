import  {useEffect, useState} from 'react';
import Header from "../components/header/header";
import style from "../style/_home.module.scss"

const x = (s) => {
    return s
}


const Home = ({number}) => {

    const [count, setCount] = useState(number);
    const [count1, setCount1] = useState(x(4));

    // if (number) const [count2, setCount2] = useState(x(6));


    useEffect(() => {
        console.log("єффект без зависимости")
        }
    )

    useEffect(() => {
            console.log(count1)
        }, [count]

    )
    console.log("в теле")
    return (
        <>
            <Header/>
            <main>
                <div className={style.img}/>
                <div>
                    <p>Вы нажали {count} раз</p>
                    <button onClick={() => setCount(pre => ++pre)}>
                        Нажми на меня
                    </button>
                </div>
                <div>
                    <p>Вы нажали {count1} раз</p>
                    <button onClick={() => setCount1(pre => ++pre)}>
                        Нажми на меня
                    </button>
                </div>
            </main>
        </>

    );
};

export default Home;