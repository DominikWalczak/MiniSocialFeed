import { SpinnerType } from '@/src/utils/zodSchemas/Schema'
import { useTranslation } from "react-i18next";

const Spinner = ({ data }: { data:  SpinnerType}) => {
    const { t } = useTranslation();

    return (
        <div className={`${data} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}>
          <span className="sr-only">{t('loading')}...</span>
        </div>
    );
}

export default Spinner