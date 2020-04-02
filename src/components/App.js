import React from 'react'
import List from './List'

const rationDetail=[
    {name:"aalo",sellingPrice:50,purchasedPrice:44},
    {name:'payaz',sellingPrice:50,purchasedPrice:44}
]

class App extends React.Component{
    state={items:rationDetail}


    render(){
        
        return (
            <div>
            <div className='text-primary'  style={{backgroundColor:'aqua'}}>
                <h1>Ration List</h1>
            </div>
            <div>
            <div className='text-secondary'>Serach Item{this.state.items.map(listDetail=>{
                return (
                    <div className='form-inline'>
                    <h1>{listDetail.name} </h1>
                    <h3>{listDetail.sellingPrice}</h3>
                    <h3>{listDetail.purchasedPrice}</h3>
                    <button className="
                    btn btn-danger" >Edit</button>
                    </div>
                    
                )
            })
            }
            </div>
            
            <List />
            </div>
            </div>
        )

    }


}

export default App