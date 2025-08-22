import { createPortal } from "react-dom";

export default function Modal({isOpen , setIsOpen , header , footer, children}) {
  return createPortal(
    <div 
      className={`fixed inset-0 flex items-center justify-center px-4 bg-black/40 ${isOpen ? '' : 'hidden'}`} 
      onClick={()=>setIsOpen(false)}
    >
        <div 
          className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
          onClick={(e)=>e.stopPropagation()}
        >
          {header}
          <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
            {
              children
            }
          </div>
          {footer}
        </div>
    </div> , 
    document.querySelector('#portal')
  )
}
