import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';

export const InformationIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.99225 1.40189e-05C7.43669 -0.00227409 5.90721 0.399975 4.5537 1.16734C3.20019 1.93471 2.06909 3.04088 1.27121 4.37744C0.473344 5.71401 0.0360837 7.23511 0.0022822 8.79172C-0.0315193 10.3483 0.339297 11.887 1.0784 13.257L0.0423315 16.712C-0.00255057 16.8614 -0.0118993 17.0192 0.0150324 17.1728C0.0419641 17.3265 0.104429 17.4716 0.197436 17.5968C0.290442 17.722 0.411411 17.8236 0.550672 17.8936C0.689934 17.9636 0.843627 18.0001 0.999467 18C1.09689 17.9999 1.1938 17.9857 1.28721 17.958L4.73909 16.921C5.94391 17.5715 7.28123 17.9381 8.64908 17.9928C10.0169 18.0475 11.3792 17.7889 12.632 17.2367C13.8849 16.6845 14.9952 15.8533 15.8784 14.8064C16.7616 13.7595 17.3943 12.5246 17.7283 11.1958C18.0623 9.86703 18.0887 8.47947 17.8056 7.1389C17.5226 5.79834 16.9374 4.54017 16.0948 3.4603C15.2522 2.38044 14.1744 1.50739 12.9435 0.907724C11.7126 0.308055 10.3612 -0.00240418 8.99225 1.40189e-05ZM8.99225 4.00001C9.18985 4.00001 9.38302 4.05866 9.54732 4.16854C9.71162 4.27842 9.83968 4.4346 9.9153 4.61733C9.99092 4.80005 10.0107 5.00112 9.97215 5.1951C9.9336 5.38908 9.83845 5.56726 9.69872 5.70712C9.55899 5.84697 9.38097 5.94221 9.18717 5.98079C8.99336 6.01938 8.79247 5.99958 8.60991 5.92389C8.42735 5.8482 8.27131 5.72003 8.16153 5.55558C8.05175 5.39113 7.99315 5.19779 7.99315 5.00001C7.99315 4.73479 8.09841 4.48044 8.28578 4.2929C8.47315 4.10537 8.72727 4.00001 8.99225 4.00001ZM9.99135 14H8.99225C8.72727 14 8.47315 13.8946 8.28578 13.7071C8.09841 13.5196 7.99315 13.2652 7.99315 13V9.00001C7.72818 9.00001 7.47405 8.89465 7.28668 8.70711C7.09932 8.51958 6.99405 8.26522 6.99405 8.00001C6.99405 7.73479 7.09932 7.48044 7.28668 7.2929C7.47405 7.10537 7.72818 7.00001 7.99315 7.00001H8.99225C9.25723 7.00001 9.51135 7.10537 9.69872 7.2929C9.88609 7.48044 9.99135 7.73479 9.99135 8.00001V12C10.2563 12 10.5104 12.1054 10.6978 12.2929C10.8852 12.4804 10.9904 12.7348 10.9904 13C10.9904 13.2652 10.8852 13.5196 10.6978 13.7071C10.5104 13.8946 10.2563 14 9.99135 14Z"
        fill="currentColor"
      />
      <circle cx="9" cy="9" r="8" fill="currentColor" />
      <path
        d="M11.4923 13.705L11.3246 14.3904C10.8216 14.5889 10.4198 14.7401 10.1206 14.8439C9.82111 14.9482 9.47308 15 9.07655 15C8.46761 15 7.99396 14.8508 7.65615 14.5545C7.31834 14.2571 7.14938 13.8801 7.14938 13.4228C7.14938 13.2458 7.16164 13.0637 7.18713 12.8782C7.21283 12.6924 7.2537 12.4832 7.30963 12.2494L7.93825 10.0245C7.99418 9.8114 8.04171 9.60953 8.07979 9.41863C8.1184 9.22892 8.137 9.05437 8.137 8.89724C8.137 8.61309 8.07817 8.41434 7.96105 8.3026C7.84393 8.19118 7.62044 8.13461 7.28865 8.13461C7.12615 8.13461 6.95912 8.16063 6.78887 8.21097C6.61787 8.26151 6.47171 8.31034 6.349 8.35573L6.5171 7.66978C6.9289 7.50211 7.32253 7.35853 7.69906 7.23937C8.07559 7.11988 8.43136 7.06008 8.76788 7.06008C9.37263 7.06008 9.83929 7.20624 10.167 7.49856C10.4947 7.79109 10.6585 8.17031 10.6585 8.63761C10.6585 8.7343 10.6477 8.90466 10.6246 9.14815C10.602 9.39218 10.56 9.61577 10.4987 9.81915L9.87274 12.0352C9.82144 12.2132 9.7753 12.4167 9.73518 12.6456C9.69377 12.8731 9.67399 13.0469 9.67399 13.1635C9.67399 13.4577 9.73959 13.6586 9.87112 13.7654C10.0036 13.8722 10.2318 13.9254 10.556 13.9254C10.7082 13.9254 10.8813 13.8984 11.0737 13.8454C11.2656 13.7923 11.4055 13.7458 11.4923 13.705ZM11.6511 4.40136C11.6511 4.78746 11.5055 5.11721 11.2131 5.38834C10.9214 5.66044 10.57 5.7966 10.1588 5.7966C9.74637 5.7966 9.39404 5.66044 9.09903 5.38834C8.80456 5.1171 8.657 4.78746 8.657 4.40136C8.657 4.01602 8.80456 3.68573 9.09903 3.41116C9.3935 3.13702 9.74647 3 10.1588 3C10.5699 3 10.9214 3.13734 11.2131 3.41116C11.5058 3.68573 11.6511 4.01612 11.6511 4.40136Z"
        fill={isMounted && isDarkMode ? '#252525' : '#ffffff'}
      />
    </svg>
  );
};
