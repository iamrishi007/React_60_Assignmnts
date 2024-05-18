import { useRef } from 'react'


export const DynamicForm = () => {

     const inputRef1 = useRef(null)
     const inputRef2 = useRef(null)
     const inputRef3 = useRef(null)



     function handleTab(e, ref) {
          if (e.key === "Tab") {
               e.preventDefault()
               ref.current.focus()
          }
     }
     return (
          <div>

               <input ref={inputRef1} type='text' placeholder='text 1' onKeyDown={(e) => handleTab(e, inputRef2)} />
               <br />
               <br />
               <input ref={inputRef2} type='text' placeholder='text 2' onKeyDown={(e) => handleTab(e, inputRef3)} />
               <br />
               <br />
               <input ref={inputRef3} type='text' placeholder='text 3' onKeyDown={(e) => handleTab(e, inputRef1)} />
          </div>
     )

}