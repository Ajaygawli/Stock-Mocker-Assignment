import React, { Component } from 'react'



export default class News extends Component {
    state = {
        news: [],
    }

    async componentDidMount() {
        await fetch('https://cloud.iexapis.com/stable/stock/market/news/last/10?token=<Your Token>') //Please enter your Api token here
            .then(response => response.json())
            .then(data => this.setState({ news: data }));

    }
    render() {
        const { news } = this.state;
        console.log(news)

        return (
            <div>
                <h1 className='text-center'>Latest News</h1>
                <div className='row'>
                    {news.map(item => (
                        <div className='my-3 col-md-4'>
                            <div className="card border-secondary card-dark" style={{ width: "18rem" }}>
                                <img src={!item.image?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwgvU7a1aZqDpzDQ8xxvhl7x-4nDBY47D0Zg0I2iNwA&s" : item.image} className="card-img-top  rounded mx-auto d-block " alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title font-weight-bold">{item.headline.slice(0,100)}...</h4>
                                    <p className="card-text h6">{item.summary.slice(0,180)}...</p>
                                    <a href={item.url} target='_blank' className="btn btn-dark btn-sm">Read More</a>
                                </div>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }


}
