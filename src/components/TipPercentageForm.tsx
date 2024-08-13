

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps= {
    setTip: React.Dispatch<React.SetStateAction<number>>, /* Este valor aparece cuando coloco el mouse sobre la definicion de setTip */
    tip:number
}

const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina</h3>

        <form>
            {tipOptions.map(tipOption =>(
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor= {tipOption.id} >{tipOption.label} </label>
                    <input 
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value= {tipOption.value}
                    onChange={e => setTip(+e.target.value)} /* El + se coloca ya que el tipo de dato de setTip es Number y aqui estoy enviando un evento (siempre será string) */
                    checked={tipOption.value === tip}
                    />
                </div>
            ))}
            
        </form>
    </div>
  )
}

export default TipPercentageForm