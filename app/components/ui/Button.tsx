import { validationMiddleware } from '@/src/middlewares/validationMiddleware'
import { ButtonSchema, ButtonType } from '@/src/utils/zodSchemas/Schema'
import { useTranslation } from "react-i18next";
import Spinner from './Spinner';

const Button = ({ data }: { data:  ButtonType}) => {
  const dataCheck = validationMiddleware(ButtonSchema, data);
  const { t } = useTranslation();

  const color = {
    primary: "bg-[rgb(8,81,156)] hover:bg-[rgb(8,81,156)]/70 active:bg-[rgb(8,81,156)]/50", 
    secondary: "bg-[rgb(33,113,181)] hover:bg-[rgb(33,113,181)]/70 active:bg-[rgb(33,113,181)]/50", 
    danger: "bg-red-400 hover:bg-bg-red-500  active:bg-red-600"
  };
  const sizes = {
    sm: {
      padding: "px-6 py-2",
      fontSize: "text-sm",
      spinner: "h-6 w-6"
    },
    md:{
      padding: "px-8 py-4",
      fontSize: "text-lg",
      spinner: "h-8 w-8"
    },
    lg:{
      padding: "px-10 py-4",
      fontSize: "text-xl",
      spinner: "h-10 w-10"
    },
  };
  const currentSize = sizes[dataCheck.size] || sizes.md;
  const currentColor = color[dataCheck.variant] || color.primary;

  return (
    <button
      disabled={dataCheck.disabled || dataCheck.isLoading}
      className={`
        ${currentSize.padding} 
        ${currentSize.fontSize} 
        ${currentColor} 
        rounded-2xl transition-all duration-500 
        flex items-center justify-center
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {dataCheck.isLoading ? (
        <Spinner data={currentSize.spinner} />
      ) : (
        <span>{t(dataCheck.content)}</span>
      )}
    </button>
  );
}

export default Button