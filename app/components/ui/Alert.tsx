import { AlertType } from '@/src/utils/zodSchemas/Schema'
import { X } from 'lucide-react'

const Alert = ({ data, onClose }: { data: AlertType; onClose?: () => void }) => {
  const color = {
    success: 'bg-success-light border-success text-success-dark',
    error: 'bg-erorr-warning-light border-error-warning text-error-warning-dark',
    info: 'bg-blue-100 border-primary text-primary-dark',
  };

  return (
    <div className={`flex justify-between items-center p-4 border-l-4 rounded shadow-md ${color[data.type]} w-full max-w-md`}>
      <div className="flex-1">
        <p className="text-sm font-medium">{data.text}</p>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-4 hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;