import React from 'react'

function CellComponent({id,cell,cells,setCells,firstGo,setFirstGo,winner}) {
    
    function handleGame(event){
        let taken = event.target.firstChild.classList.contains('circle') || event.target.firstChild.classList.contains('cross')

        if(!taken){
            if(firstGo === 'circle'){
                event.target.firstChild.classList.add('circle')
                setFirstGo('cross')
                handleChange('cross')
            }else if(firstGo === 'cross'){
                event.target.firstChild.classList.add('cross')
                setFirstGo('circle')
                handleChange('circle')
            }
        }
    }

    function handleChange(classList){
        
        let updateArrayCell = cells.map((el,index)=>{
            if(index === id){
                return classList;
            }else{
                return el;
            }
        })
        
        setCells(updateArrayCell)
    }   
    
  return (
    <div className='square' id={id} onClick={(event)=>handleGame(event)}>
        <div className={cell }></div>
    </div>
  )
}

export default CellComponent