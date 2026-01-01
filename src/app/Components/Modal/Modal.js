"use client";

const Modal = ({ isOpen, onClose, title, children, size = "sm" }) => {
  if (!isOpen) return null;

  // Map the size prop to Tailwind max-width classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-2xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-[95vw] h-[90vh]", // Almost full screen
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle backdrop-blur-sm transition-all">
      {/* We combine the dynamic size class here. 
         'w-11/12' ensures it stays responsive on small screens.
      */}
      <div className={`modal-box relative w-11/12 ${selectedSize} transition-all duration-300`}>
        
        {/* Dynamic Title */}
        <h3 className="font-bold text-2xl mb-4 border-b border-base-200 pb-2 italic">
          {title}
        </h3>
        
        {/* Dynamic Body */}
        <div className="py-2 overflow-y-auto">
          {children}
        </div>

        <div className="modal-action">
          <button className="btn btn-outline btn-sm shadow-md" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop bg-black/60 backdrop-blur-xs" onClick={onClose}>
        <button className="cursor-default">close</button>
      </div>
    </div>
  );
};

export default Modal;