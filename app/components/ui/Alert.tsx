import { AlertType } from '@/src/utils/zodSchemas/Schema'
import { X } from 'lucide-react'

const Alert = ({ data, onClose }: { data: AlertType; onClose?: () => void }) => {
  const color = {
    success: 'bg-green-100 border-green-500 text-green-800',
    error: 'bg-red-100 border-red-500 text-red-800',
    info: 'bg-blue-100 border-blue-500 text-blue-800',
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