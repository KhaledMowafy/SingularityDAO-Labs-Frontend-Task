import React from 'react'
import {useState, useEffect} from 'react'
import { useAllCategory } from '@/utils/Hooks';
import { Hfive, PokemonContainer, FlexColumn, Hone } from '@/style/CustomTags';
import Chart from "react-apexcharts";

function PokemonDetails({name}) {

    const { data, isLoading} = useAllCategory(`/pokemon/${name}`);
    const [options, setOptions] = useState();
    const [xaxis, setXaxis] = useState();
    const [chartData, setChartData] = useState({});

    useEffect(()=>{
        const arr =[];
        const nameArr = [];
        data?.stats.map((item)=> { 
            arr.push(item.base_stat)
            nameArr.push(item.stat.name)
        })
        setOptions(arr);
        setXaxis(nameArr)
    },[data])
  
    useEffect(()=>{
        setChartData ( {
            chart: {
              type: "line",
              id: "apexchart-example",
            },
            xaxis: {
              categories: xaxis
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100]
                // colorStops: []
              }
            },
            legend: {
              // position: '',
              width: 400
              // position: 'top',
            },
            series: [
              {
                name: "States",
                type: "column",
                data: options
              },
            ]
          })
    },[xaxis, options])

  return (
    <div>
        {data?.response&&data?.response.data==='Not Found'?
        <Hfive>Pokemon was not found, try Charizard instead!</Hfive>:
        <FlexColumn>
        <Hone>Pokemon Type: {data?.name}</Hone>
        <PokemonContainer>
              <Hfive>Order: {data?.order} </Hfive>
              <Hfive>Base Experience: {data?.base_experience}</Hfive> 
              <Hfive>Species: {data?.species.name}</Hfive> 
        </PokemonContainer>
        <PokemonContainer>
          <Hfive>Types: </Hfive>
             {data?.types.map((item,index)=>(
              <Hfive key={item.type.name}>{item.type.name}</Hfive>
             ))}
        </PokemonContainer>
        <PokemonContainer>
          {isLoading?<p>Loading...</p>:
        <Chart
                options={chartData}
                series={chartData.series}
                width="500"
              />}
        </PokemonContainer>
     <PokemonContainer>
      {data?.abilities.map((item,index)=>(
          <Hfive key={item.ability.name}>Ability: {item.ability.name}</Hfive>
      ))}
    </PokemonContainer>
    </FlexColumn>
        }
    </div>
  )
}

export default PokemonDetails
