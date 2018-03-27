const coinData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "10153.7",
        "price_btc": "1.0",
        "24h_volume_usd": "8078040000.0",
        "market_cap_usd": "170964192962",
        "available_supply": "16837625.0",
        "total_supply": "16837625.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "0.33",
        "percent_change_24h": "-0.96",
        "percent_change_7d": "-10.74",
        "last_updated": "1517440467"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "1108.99",
        "price_btc": "0.110209",
        "24h_volume_usd": "3749300000.0",
        "market_cap_usd": "107940458102",
        "available_supply": "97332219.0",
        "total_supply": "97332219.0",
        "max_supply": null,
        "percent_change_1h": "0.16",
        "percent_change_24h": "2.29",
        "percent_change_7d": "4.91",
        "last_updated": "1517440453"
    },
    {
        "id": "ripple",
        "name": "Ripple",
        "symbol": "XRP",
        "rank": "3",
        "price_usd": "1.13491",
        "price_btc": "0.00011278",
        "24h_volume_usd": "1276970000.0",
        "market_cap_usd": "43965440568.0",
        "available_supply": "38739142811.0",
        "total_supply": "99993093880.0",
        "max_supply": "100000000000",
        "percent_change_1h": "1.09",
        "percent_change_24h": "-2.11",
        "percent_change_7d": "-16.23",
        "last_updated": "1517440441"
    },
    {
        "id": "bitcoin-cash",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "rank": "4",
        "price_usd": "1470.25",
        "price_btc": "0.14611",
        "24h_volume_usd": "727702000.0",
        "market_cap_usd": "24909398197.0",
        "available_supply": "16942288.0",
        "total_supply": "16942288.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.14",
        "percent_change_24h": "-1.26",
        "percent_change_7d": "-11.11",
        "last_updated": "1517440458"
    },
    {
        "id": "cardano",
        "name": "Cardano",
        "symbol": "ADA",
        "rank": "5",
        "price_usd": "0.513909",
        "price_btc": "0.00005107",
        "24h_volume_usd": "511619000.0",
        "market_cap_usd": "13324154893.0",
        "available_supply": "25927070538.0",
        "total_supply": "31112483745.0",
        "max_supply": "45000000000.0",
        "percent_change_1h": "0.5",
        "percent_change_24h": "-5.06",
        "percent_change_7d": "-18.84",
        "last_updated": "1517440460"
    },
    {
        "id": "stellar",
        "name": "Stellar",
        "symbol": "XLM",
        "rank": "6",
        "price_usd": "0.535435",
        "price_btc": "0.00005321",
        "24h_volume_usd": "286963000.0",
        "market_cap_usd": "9867976434.0",
        "available_supply": "18429830762.0",
        "total_supply": "103649583897",
        "max_supply": null,
        "percent_change_1h": "1.41",
        "percent_change_24h": "7.87",
        "percent_change_7d": "-6.02",
        "last_updated": "1517440444"
    },
    {
        "id": "neo",
        "name": "NEO",
        "symbol": "NEO",
        "rank": "7",
        "price_usd": "144.3",
        "price_btc": "0.0143402",
        "24h_volume_usd": "363597000.0",
        "market_cap_usd": "9379500000.0",
        "available_supply": "65000000.0",
        "total_supply": "100000000.0",
        "max_supply": null,
        "percent_change_1h": "0.47",
        "percent_change_24h": "-2.49",
        "percent_change_7d": "4.58",
        "last_updated": "1517440451"
    },
    {
        "id": "litecoin",
        "name": "Litecoin",
        "symbol": "LTC",
        "rank": "8",
        "price_usd": "161.897",
        "price_btc": "0.016089",
        "24h_volume_usd": "368187000.0",
        "market_cap_usd": "8906044333.0",
        "available_supply": "55010558.0",
        "total_supply": "55010558.0",
        "max_supply": "84000000.0",
        "percent_change_1h": "0.31",
        "percent_change_24h": "-3.22",
        "percent_change_7d": "-10.58",
        "last_updated": "1517440441"
    },
    {
        "id": "eos",
        "name": "EOS",
        "symbol": "EOS",
        "rank": "9",
        "price_usd": "11.8781",
        "price_btc": "0.00118042",
        "24h_volume_usd": "1015720000.0",
        "market_cap_usd": "7597408525.0",
        "available_supply": "639614797.0",
        "total_supply": "900000000.0",
        "max_supply": "1000000000.0",
        "percent_change_1h": "2.93",
        "percent_change_24h": "0.74",
        "percent_change_7d": "-14.09",
        "last_updated": "1517440456"
    },
    {
        "id": "nem",
        "name": "NEM",
        "symbol": "XEM",
        "rank": "10",
        "price_usd": "0.766766",
        "price_btc": "0.00007620",
        "24h_volume_usd": "50457800.0",
        "market_cap_usd": "6900893999.0",
        "available_supply": "8999999999.0",
        "total_supply": "8999999999.0",
        "max_supply": null,
        "percent_change_1h": "0.46",
        "percent_change_24h": "-4.19",
        "percent_change_7d": "-20.67",
        "last_updated": "1517440446"
    }
]

export default coinData