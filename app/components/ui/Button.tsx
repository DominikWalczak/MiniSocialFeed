import { validationMiddleware } from '@/src/middlewares/validationMiddleware'
import { ButtonSchema, ButtonType } from '@/src/utils/zodSchemas/Schema'
import { useTranslation } from "react-i18next";
import Spinner from './Spinner';

const Button = ({ data }: { data:  ButtonType}) => {
  const dataCheck = validationMiddleware(ButtonSchema, data);
  const { t } = useTranslation();

  const color = {
    primary: "bg-primary hover:bg-primary-dark active:bg-primary-dark/80", 
    secondary: "bg-secondary hover:bg-secondary/80 active:bg-secondary-light", 
    danger: "bg-error-warning hover:bg-bg-error-warning  active:bg-error-warning"
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
        hover:shadow-md transition-shadow
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