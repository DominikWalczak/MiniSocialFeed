import { validationMiddleware } from '@/src/middlewares/validationMiddleware'
import { ButtonSchema, ButtonType } from '@/src/utils/zodSchemas/Schema'
import { useTranslation } from "react-i18next";
import Spinner from './Spinner';

const Button = ({ data }: { data:  ButtonType}) => {
  const dataCheck = validationMiddleware(ButtonSchema, data);
  const { t } = useTranslation();

  const color = {primary: "blue", secondary: "yellow", danger: "bg-red-400"};
  const sizes = {
    sm: {
      padding: "px-6 py-2",
      fontSize: 14,
      spinner: "h-6 w-6"
    },
    md:{
      padding: "px-8 py-4",
      fontSize: 18,
      spinner: "h-8 w-8"
    },
    lg:{
      padding: "px-10 py-4",
      fontSize: 22,
      spinner: "h-10 w-10"
    },
  };
  if (dataCheck.isLoading) {
    return (
      <div className={`${sizes[dataCheck.size].padding} ${color[dataCheck.variant]}`}>
        <Spinner data={sizes[dataCheck.size].spinner}/>
      </div>
    );
  }
  return (
    <div>Button</div>
  )
}

export default Button