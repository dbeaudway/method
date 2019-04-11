import React, { useEffect, useState } from 'react';
import { quoteArray } from '../../../quotes';
import Link from 'next/link'
import '../styles/QuoteGenerator.less';

function QuoteGenerator() {
    const [quote, setQuote] = useState('')
    const [quoteInput, setQuoteInput] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [time, setTime] = useState(0)
    const [submissions, setSubmissions] = useState([])
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (submissions.length === 3) {
            setIsComplete(true);
            submitResults()
        }
    }, [submissions])

    const generateQuote = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setQuoteInput('');
        setQuote(quoteArray[randomNumber].quote);
        setTime(Date.now())
    }

    const handleClick = async () => {
        setQuote('');
        setSubmissions([]);
        setIsComplete(false);
        generateQuote();
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (quote === e.target.value) {
            const submission = {
                quote,
                time: (Date.now() - time) / 1000,
                session: sessionStorage.getItem('method')
            }

            setSubmissions([...submissions, submission]);
            generateQuote();
        }
    }

    const submitResults = async () => {
        console.log('Submitting results', submissions);

        const data = JSON.stringify({
            topic: 'typing-submissions',
            message: submissions
        })

        try {
            const response = await fetch('/publish', {
                method: 'POST',
                body: data
            })

            if (response.ok) {
                const result = await response.json();
                console.log('Result:', result);
                return result;
            }

            throw new Error('Encountered error')
        }
        catch (err) {
            return err
        }
    }

    const handleChange = e => {
        setQuoteInput(e.target.value);

        if (e.target.value == quote.substring(0, [e.target.value.length])) {
            isValid !== true && setIsValid(true)
        }
        else {
            isValid !== false && setIsValid(false)
        }

        if (e.target.value !== '' && e.target.value === quote) {
            handleSubmit(e);
        }
    }

    return (
        <div>
            <div className="method-Quote-overview">
                <h2>Typing Speed Test</h2>
                <p>
                    Test your speed by typing the provided quote sample in the form as quickly as possible.
                    Your input must match the quote sample exactly in order to proceed to the next quote.
                    Complete 3 quotes and compare your times to other users.
                </p>
                {(quote === '' || isComplete) && <button onClick={handleClick}>{ isComplete ? 'Play Again' : 'Start'}</button>}
            </div>
            <div className="method-Quote-body">
                <div className="method-Quote-body-counter">
                    <p>Round: {submissions.length}/3</p>
                </div>
                { !isComplete ? (
                   <>
                        <p className="method-Quote-body-quote">{!quote ? "Example: Roses are red and violotes are blue" : quote}</p>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="text"
                                    style={{ color: isValid ? 'green' : 'red' }}
                                    value={quoteInput}
                                    onChange={handleChange}
                                />
                            </label>
                        </form>
                    </>
                ) : (
                    <>
                        <p>Your results have been submitted.</p>
                        <Link href='/results'>
                            <a>View Results</a>
                        </Link>
                    </>
                )}
            </div>
            <div className="method-Quote-results">
                <ul>
                    { submissions.length > 0 && submissions.map(({ quote, time }, index) => <li key={index}>{time}s: {quote}</li> )}
                </ul>
            </div>
        </div>
    )
}

export default QuoteGenerator;