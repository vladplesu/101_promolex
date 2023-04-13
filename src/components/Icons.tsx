import { SvgIcon } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';

export function FacebookIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.878V12.891H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.878C16.343 19.128 20 14.991 20 10Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function InstagramIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.315 0C12.745 0 13.099 0.0129999 14.123 0.0599999C15.187 0.109 15.914 0.278 16.55 0.525C17.2175 0.775874 17.8222 1.16936 18.322 1.678C18.8306 2.17777 19.2241 2.7825 19.475 3.45C19.722 4.086 19.891 4.813 19.94 5.877C19.988 6.944 20 7.284 20 10V10.08C20 12.723 19.988 13.067 19.94 14.123C19.891 15.187 19.722 15.914 19.475 16.55C19.2241 17.2175 18.8306 17.8222 18.322 18.322C17.8222 18.8306 17.2175 19.2241 16.55 19.475C15.914 19.722 15.187 19.891 14.123 19.94C13.056 19.988 12.716 20 10 20H9.92C7.277 20 6.933 19.988 5.877 19.94C4.813 19.891 4.086 19.722 3.45 19.475C2.7825 19.2241 2.17777 18.8306 1.678 18.322C1.16936 17.8222 0.775874 17.2175 0.525 16.55C0.278 15.914 0.109 15.187 0.0599999 14.123C0.0129999 13.099 0 12.744 0 10.315V9.685C0 7.255 0.0129999 6.901 0.0599999 5.877C0.109 4.813 0.278 4.086 0.525 3.45C0.775874 2.7825 1.16936 2.17777 1.678 1.678C2.17777 1.16936 2.7825 0.775874 3.45 0.525C4.086 0.278 4.813 0.109 5.877 0.0599999C6.901 0.0129999 7.256 0 9.685 0H10.315ZM10.234 1.802H9.766C7.31 1.802 6.982 1.813 5.959 1.86C4.984 1.905 4.455 2.067 4.102 2.204C3.635 2.386 3.302 2.602 2.952 2.952C2.602 3.302 2.386 3.635 2.204 4.102C2.067 4.455 1.904 4.984 1.86 5.959C1.813 6.982 1.802 7.31 1.802 9.766V10.234C1.802 12.69 1.813 13.018 1.86 14.041C1.905 15.016 2.067 15.545 2.204 15.898C2.386 16.364 2.603 16.698 2.952 17.048C3.302 17.398 3.635 17.614 4.102 17.796C4.455 17.933 4.984 18.096 5.959 18.14C7.013 18.188 7.329 18.198 10 18.198H10.08C12.677 18.198 12.997 18.188 14.04 18.14C15.016 18.095 15.545 17.933 15.898 17.796C16.364 17.614 16.698 17.398 17.048 17.048C17.398 16.698 17.614 16.365 17.796 15.898C17.933 15.545 18.096 15.016 18.14 14.041C18.188 12.986 18.198 12.671 18.198 10V9.92C18.198 7.323 18.188 7.003 18.14 5.96C18.095 4.984 17.933 4.455 17.796 4.102C17.6358 3.66757 17.3802 3.2746 17.048 2.952C16.7254 2.61986 16.3324 2.36426 15.898 2.204C15.545 2.067 15.016 1.904 14.041 1.86C13.018 1.813 12.69 1.802 10.234 1.802ZM10 4.865C10.6743 4.865 11.3421 4.99782 11.9651 5.25588C12.5881 5.51394 13.1542 5.89218 13.631 6.36901C14.1078 6.84584 14.4861 7.41191 14.7441 8.03492C15.0022 8.65793 15.135 9.32566 15.135 10C15.135 10.6743 15.0022 11.3421 14.7441 11.9651C14.4861 12.5881 14.1078 13.1542 13.631 13.631C13.1542 14.1078 12.5881 14.4861 11.9651 14.7441C11.3421 15.0022 10.6743 15.135 10 15.135C8.63811 15.135 7.33201 14.594 6.36901 13.631C5.40601 12.668 4.865 11.3619 4.865 10C4.865 8.63811 5.40601 7.33201 6.36901 6.36901C7.33201 5.40601 8.63811 4.865 10 4.865ZM10 6.667C9.11603 6.667 8.26827 7.01815 7.64321 7.64321C7.01815 8.26827 6.667 9.11603 6.667 10C6.667 10.884 7.01815 11.7317 7.64321 12.3568C8.26827 12.9818 9.11603 13.333 10 13.333C10.884 13.333 11.7317 12.9818 12.3568 12.3568C12.9818 11.7317 13.333 10.884 13.333 10C13.333 9.11603 12.9818 8.26827 12.3568 7.64321C11.7317 7.01815 10.884 6.667 10 6.667ZM15.338 3.462C15.6563 3.462 15.9615 3.58843 16.1865 3.81347C16.4116 4.03852 16.538 4.34374 16.538 4.662C16.538 4.98026 16.4116 5.28548 16.1865 5.51053C15.9615 5.73557 15.6563 5.862 15.338 5.862C15.0197 5.862 14.7145 5.73557 14.4895 5.51053C14.2644 5.28548 14.138 4.98026 14.138 4.662C14.138 4.34374 14.2644 4.03852 14.4895 3.81347C14.7145 3.58843 15.0197 3.462 15.338 3.462Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function TwitterIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        d='M7.548 19.901C16.6044 19.901 21.558 12.3975 21.558 5.89105C21.558 5.67745 21.558 5.46505 21.5436 5.25505C22.5074 4.55728 23.3392 3.69339 24 2.70385C23.1013 3.10226 22.1479 3.36356 21.1716 3.47905C22.1996 2.86352 22.9689 1.89547 23.3364 0.75505C22.37 1.32851 21.3128 1.73273 20.2104 1.95025C19.4681 1.16037 18.486 0.637252 17.4164 0.461896C16.3467 0.286541 15.249 0.46873 14.2933 0.980253C13.3377 1.49178 12.5773 2.3041 12.13 3.29144C11.6826 4.27879 11.5732 5.38607 11.8188 6.44185C9.86111 6.34374 7.94592 5.83504 6.19757 4.94877C4.44923 4.0625 2.90679 2.81848 1.6704 1.29745C1.04078 2.38129 0.847907 3.66435 1.13104 4.88541C1.41418 6.10646 2.15204 7.1737 3.1944 7.86985C2.41112 7.84713 1.64478 7.63641 0.96 7.25545V7.31785C0.960467 8.45461 1.35407 9.55622 2.07408 10.4359C2.79408 11.3155 3.79616 11.9191 4.9104 12.1443C4.18537 12.3419 3.42467 12.3706 2.6868 12.2283C3.00139 13.2068 3.61401 14.0626 4.43895 14.6758C5.26389 15.289 6.25989 15.629 7.2876 15.6483C6.26654 16.4505 5.09734 17.0437 3.84687 17.3937C2.5964 17.7437 1.28919 17.8438 0 17.6883C2.25193 19.1335 4.87223 19.9 7.548 19.8963'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function LinkedInIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.6056 18.6058H15.404V13.5922C15.404 12.3982 15.3836 10.8598 13.7396 10.8598C12.0716 10.8598 11.8184 12.163 11.8184 13.5082V18.6058H8.61681V8.2978H11.6876V9.70659H11.732C12.1592 8.89659 13.2044 8.04219 14.7632 8.04219C18.0068 8.04219 18.6068 10.1758 18.6068 12.9526V18.6058H18.6056ZM5.00601 6.89019C4.76207 6.89043 4.52047 6.84262 4.295 6.74948C4.06954 6.65635 3.86462 6.51972 3.69196 6.34739C3.5193 6.17506 3.38227 5.97041 3.2887 5.74513C3.19513 5.51985 3.14685 5.27834 3.14661 5.0344C3.14638 4.79045 3.19419 4.54885 3.28732 4.32339C3.38046 4.09792 3.51709 3.89301 3.68942 3.72035C3.86174 3.54769 4.06639 3.41066 4.29168 3.31709C4.51696 3.22351 4.75847 3.17523 5.00241 3.175C5.49508 3.17452 5.96776 3.36977 6.31646 3.7178C6.66517 4.06583 6.86133 4.53813 6.86181 5.03079C6.86229 5.52346 6.66704 5.99614 6.31901 6.34484C5.97098 6.69355 5.49868 6.88972 5.00601 6.89019ZM3.40161 18.6058H6.60801V8.2978H3.40041V18.6058H3.40161ZM20.2016 0.200195H1.79361C0.914012 0.200195 0.200012 0.897395 0.200012 1.7578V20.2414C0.200012 21.1018 0.914012 21.8002 1.79361 21.8002H20.2016C21.0824 21.8002 21.8 21.1018 21.8 20.2414V1.7578C21.8 0.897395 21.0824 0.200195 20.2016 0.200195Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function TelegramIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 496 512'>
      <path
        d='M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function YoutubeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function HomeLawsIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='139' height='130' viewBox='0 0 139 130'>
      <path
        d='M69.7655 60.9375V4.21484C69.7655 1.92969 71.561 0 73.8694 0C105.597 0 131.323 25.4668 131.323 56.875C131.323 59.1602 129.374 60.9375 127.066 60.9375H69.7655ZM0 69.0625C0 38.2637 23.1098 12.7715 53.0936 8.70898C55.4533 8.37891 57.454 10.2578 57.454 12.6191V73.125L97.5948 112.861C99.3133 114.562 99.1851 117.355 97.2101 118.727C87.1556 125.836 74.8441 130 61.5578 130C27.5728 130 0 102.73 0 69.0625ZM135.017 73.125C137.402 73.125 139.275 75.1055 138.967 77.4414C136.992 91.6348 130.092 104.254 120.012 113.572C118.473 114.994 116.062 114.893 114.575 113.395L73.8694 73.125H135.017Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function HomeCommitteesIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='1780' height='1633' viewBox='0 0 1780 1633'>
      <path
        d='M8.75 0C13.5898 0 17.5 4.14955 17.5 9.28571V106.786C17.5 109.339 19.4688 111.429 21.875 111.429H131.25C136.09 111.429 140 115.578 140 120.714C140 125.85 136.09 130 131.25 130H21.875C9.78906 130 0 119.612 0 106.786V9.28571C0 4.14955 3.91016 0 8.75 0ZM43.75 55.7143C48.5898 55.7143 52.5 59.8638 52.5 65V83.5714C52.5 88.7076 48.5898 92.8571 43.75 92.8571C38.9102 92.8571 35 88.7076 35 83.5714V65C35 59.8638 38.9102 55.7143 43.75 55.7143ZM78.75 37.1429V83.5714C78.75 88.7076 74.8398 92.8571 70 92.8571C65.1602 92.8571 61.25 88.7076 61.25 83.5714V37.1429C61.25 32.0067 65.1602 27.8571 70 27.8571C74.8398 27.8571 78.75 32.0067 78.75 37.1429ZM96.25 46.4286C101.09 46.4286 105 50.5781 105 55.7143V83.5714C105 88.7076 101.09 92.8571 96.25 92.8571C91.4102 92.8571 87.5 88.7076 87.5 83.5714V55.7143C87.5 50.5781 91.4102 46.4286 96.25 46.4286ZM131.25 18.5714V83.5714C131.25 88.7076 127.34 92.8571 122.5 92.8571C117.66 92.8571 113.75 88.7076 113.75 83.5714V18.5714C113.75 13.4353 117.66 9.28571 122.5 9.28571C127.34 9.28571 131.25 13.4353 131.25 18.5714Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function HomeControlIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='139' height='130' viewBox='0 0 139 130'>
      <path
        d='M17.375 9.28571C17.375 4.14955 13.4928 0 8.6875 0C3.88223 0 0 4.14955 0 9.28571V106.786C0 119.612 9.71914 130 21.7188 130H130.312C135.118 130 139 125.85 139 120.714C139 115.578 135.118 111.429 130.312 111.429H21.7188C19.3297 111.429 17.375 109.339 17.375 106.786V9.28571ZM127.761 34.4152C131.154 30.7879 131.154 24.8973 127.761 21.2701C124.367 17.6429 118.856 17.6429 115.462 21.2701L86.875 51.8549L71.2918 35.1987C67.8982 31.5714 62.3871 31.5714 58.9936 35.1987L28.5873 67.6987C25.1938 71.3259 25.1938 77.2165 28.5873 80.8438C31.9809 84.471 37.492 84.471 40.8855 80.8438L65.1562 54.9308L80.7394 71.5871C84.133 75.2143 89.6441 75.2143 93.0377 71.5871L127.788 34.4442L127.761 34.4152Z'
        fill='currentColor'
      />
    </SvgIcon>
  );
}

export function PillarsIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      width='1336.88'
      height='1524.3'
      viewBox='0 0 1336.88 1524.3'
    >
      <defs>
        <style>
          {
            '.pillars-cls-1,.pillars-cls-2,.pillars-cls-3,.pillars-cls-4{fill:none;stroke:currentColor;stroke-miterlimit:10;}.pillars-cls-1{stroke-width:6px;}.pillars-cls-2{stroke-width:4px;}.pillars-cls-3{stroke-width:9px;}.pillars-cls-4{stroke-width:5px;}'
          }
        </style>
      </defs>
      <path
        className='pillars-cls-1'
        d='M17.46,3H495.38a0,0,0,0,1,0,0v8.5a64.63,64.63,0,0,1-64.63,64.63H82.09A64.63,64.63,0,0,1,17.46,11.5V3a0,0,0,0,1,0,0Z'
      />
      <rect
        className='pillars-cls-1'
        x='41.27'
        y='86.34'
        width='430.3'
        height='28.91'
        rx='14.46'
      />
      <rect
        className='pillars-cls-1'
        x='41.27'
        y='214.75'
        width='430.3'
        height='28.91'
        rx='14.46'
      />
      <path
        className='pillars-cls-2'
        d='M1303.13,861.61H872.83c2,1.3,20.46,13.5,22.11,36.56a47.88,47.88,0,0,1-22.11,43.37h430.3c-2-1.47-20-15-20.41-39.11C1282.29,877.31,1301.34,862.91,1303.13,861.61Z'
        transform='translate(-831.56 -737.85)'
      />
      <rect
        className='pillars-cls-3'
        x='67.63'
        y='256.42'
        width='377.57'
        height='1142.93'
      />
      <rect
        className='pillars-cls-4'
        x='51.47'
        y='1399.35'
        width='409.89'
        height='57.83'
      />
      <rect
        className='pillars-cls-1'
        x='3'
        y='1454.97'
        width='506.83'
        height='66.33'
      />
      <rect
        className='pillars-cls-4'
        x='147.57'
        y='288.73'
        width='20.41'
        height='1081.7'
        rx='10.2'
      />
      <rect
        className='pillars-cls-4'
        x='211.06'
        y='288.73'
        width='20.41'
        height='1081.7'
        rx='10.2'
      />
      <rect
        className='pillars-cls-4'
        x='275.98'
        y='288.73'
        width='20.41'
        height='1081.7'
        rx='10.2'
      />
      <rect
        className='pillars-cls-4'
        x='344.86'
        y='288.73'
        width='20.41'
        height='1081.7'
        rx='10.2'
      />
      <path
        className='pillars-cls-1'
        d='M1737.69,740.85h348.66A64.63,64.63,0,0,1,2151,805.48V814a0,0,0,0,1,0,0H1673.06a0,0,0,0,1,0,0v-8.5A64.63,64.63,0,0,1,1737.69,740.85Z'
        transform='translate(2992.49 816.98) rotate(-180)'
      />
      <rect
        className='pillars-cls-1'
        x='1696.87'
        y='824.19'
        width='430.3'
        height='28.91'
        rx='14.46'
        transform='translate(2992.49 939.44) rotate(-180)'
      />
      <rect
        className='pillars-cls-1'
        x='1696.87'
        y='952.6'
        width='430.3'
        height='28.91'
        rx='14.46'
        transform='translate(2992.49 1196.26) rotate(180)'
      />
      <path
        className='pillars-cls-2'
        d='M1696.87,861.61h430.3c-2.05,1.3-20.46,13.5-22.11,36.56a47.88,47.88,0,0,0,22.11,43.37h-430.3c2-1.47,20-15,20.41-39.11C1717.71,877.31,1698.66,862.91,1696.87,861.61Z'
        transform='translate(-831.56 -737.85)'
      />
      <rect
        className='pillars-cls-3'
        x='1723.24'
        y='994.27'
        width='377.57'
        height='1142.93'
        transform='translate(2992.49 2393.61) rotate(180)'
      />
      <rect
        className='pillars-cls-4'
        x='1707.08'
        y='2137.2'
        width='409.89'
        height='57.83'
        transform='translate(2992.49 3594.37) rotate(180)'
      />
      <rect
        className='pillars-cls-1'
        x='1658.61'
        y='2192.82'
        width='506.83'
        height='66.33'
        transform='translate(2992.49 3714.12) rotate(180)'
      />
      <rect
        className='pillars-cls-4'
        x='2000.46'
        y='1026.58'
        width='20.41'
        height='1081.7'
        rx='10.2'
        transform='translate(3189.78 2397.02) rotate(180)'
      />
      <rect
        className='pillars-cls-4'
        x='1936.97'
        y='1026.58'
        width='20.41'
        height='1081.7'
        rx='10.2'
        transform='translate(3062.79 2397.02) rotate(-180)'
      />
      <rect
        className='pillars-cls-4'
        x='1872.06'
        y='1026.58'
        width='20.41'
        height='1081.7'
        rx='10.2'
        transform='translate(2932.96 2397.02) rotate(180)'
      />
      <rect
        className='pillars-cls-4'
        x='1803.17'
        y='1026.58'
        width='20.41'
        height='1081.7'
        rx='10.2'
        transform='translate(2795.2 2397.02) rotate(-180)'
      />
    </SvgIcon>
  );
}

export function GearsIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      width='1469.47 '
      height='1110.85'
      viewBox='0 0 1469.47 1110.85'
    >
      <defs>
        <style>
          {
            '.gears-cls-1,.gears-cls-2{fill:none;stroke:currentColor;stroke-miterlimit:10;}.gears-cls-1{stroke-width:6px;}.gears-cls-2{stroke-width:5px;}'
          }
        </style>
      </defs>
      <path
        className='gears-cls-1'
        d='M1492.57,1956.49c-32.21.18-52-9.47-65.83-27.61-19.89-26-39.66-33.8-71.17-16.09-17.2,9.67-25.91,16.34-23.93,36.76,7.94,81.76-38.88,102.58-101.4,103.11-76.08.65-108.41-35.25-101.84-103.47,1.94-20.16-6-27.59-23.8-37-29.66-15.64-47.19-9.51-68.53,14.38-37.45,41.92-80.64,40.56-120.5.84-10.8-10.76-21.84-21.31-32.29-32.42-28.18-30-28.26-72.35-.5-102.4.42-.45.87-.86,1.28-1.31,12.17-13.53,33.31-23.76,35.46-40.07,2-15.12-12.38-32-18-48.65-3.13-9.35-7.86-12.21-17.13-12-16.45.33-33,.6-49.37-.88-38.24-3.44-65.8-33.49-66.69-72q-.69-29.27,0-58.57c1-39.08,29.93-69.37,68.83-71.9a324.53,324.53,0,0,1,42.07-.25c12.72.84,21-2.28,23.66-15.94,1.14-5.88,4-11.46,6.36-17.07,12.57-30.06,13-30.5-11.31-53.71-21-20-37.51-41-35.24-72.64,3.82-53.52,85.91-117.31,133.88-103.46,24.45,7.06,39.21,26.29,55.48,43.28,9.78,10.21,16.81,10,30.81,6.3,38.45-10.18,49.51-31.44,46.8-70.3-3.07-44,27.68-73.41,71.55-76.06a423,423,0,0,1,64,.6c39.71,3.64,65.2,31.61,67.6,71.06,1.11,18.15-7.16,40.43,3.46,53.33,10.3,12.5,32.27,15,48.44,23.21,8.78,4.46,14.09,2.94,20.34-3.83,9.51-10.29,19.66-20,30-29.56,30-27.73,70.81-28.52,100.94-1.3,15.38,13.89,30,28.66,44,44,26.53,29.07,26.25,70.42.2,99.73-.81.91-1.7,1.75-2.49,2.68-11.81,13.8-33.89,23.37-35.22,40.09-1.28,16.2,12.79,33.31,18.71,50.51,2.74,8,6.58,10.38,14.37,10.16,14.63-.41,29.29-.28,43.93-.07,37.08.53,66.67,26.11,71.65,62.76,3.29,24.25,2.85,48.81.58,73.06-3.65,39.11-31.7,65.11-71.2,68-1.21.09-2.44,0-3.66.1-17.6.92-39.34-6.88-51.7,3-12.08,9.64-14,31.45-21.89,47.12-4.63,9.13-2.38,14.34,4.2,20.5,10.69,10,21.2,20.26,31,31.1,27.92,30.84,27.36,72-1.31,102.21-12.59,13.28-25.62,26.16-38.79,38.86C1522.29,1950.22,1505.74,1956.59,1492.57,1956.49ZM1581,1635.15c12.21,0,24.41-.08,36.62,0,15.34.12,22.16-7.75,22-22.7-.14-15.25.13-30.51-.07-45.77-.25-19.54-5.42-24.84-25.06-25.1-22-.29-43.94,0-65.91-.1-16.4,0-28.43-6.22-32.19-23.57-6.25-28.86-17.92-55.55-32.77-80.91-8.65-14.77-6.79-27.5,5.61-39.42,15-14.37,29.43-29.26,44-44,16.13-16.32,16.25-23.84.7-39.69q-14.12-14.37-28.47-28.49c-15.32-15-22.56-14.9-38.31.61-13.91,13.7-27.64,27.59-41.45,41.4-20.86,20.85-25.46,21.52-50.63,7.45-23.5-13.13-48-24.12-74.36-29.67-17.84-3.76-24.33-13.9-24.18-30.78.2-22,.25-43.94,0-65.91-.26-20.25-5.92-25.77-26.42-26.16q-21-.4-42.1,0c-20.81.41-26.1,5.64-26.29,26.09-.21,21.36-.4,42.72.06,64.07.37,17.27-7,27.73-24.09,31.32-27.09,5.69-52,17-76.08,30.23-21.38,11.72-29.12,10.75-46.66-6.66-14.73-14.61-29.47-29.21-44-44-11.06-11.3-22-11.81-33.22-.55s-22.36,22.52-33.7,33.61c-12.2,11.93-11.13,22.92.93,34.44,15.44,14.75,30.09,30.33,45.47,45.15,13.26,12.77,16.17,26.2,6.06,42.44-14.59,23.42-24.35,49-31.73,75.52-6.24,22.39-11.9,27.31-35.48,27.52-21.36.18-42.72.16-64.08,0-15.31-.07-22.26,7.92-22.35,22.65-.1,15.26-.21,30.52,0,45.77.29,19.48,5.72,25.16,25,25.43,22.58.32,45.16,0,67.74.15,16.77.13,27.5,7.71,31,24.91,5.55,27.11,16.77,52.06,30.23,76.08,11.82,21.11,10.73,29.29-6.52,46.73-15,15.18-30.28,30.14-45.29,45.33-9.9,10-10,20.28.06,30.38,11.18,11.25,22.23,22.64,33.61,33.69,13.53,13.13,22.31,13.14,35.91-.12,15.72-15.34,31.31-30.83,46.58-46.62,12-12.45,25.15-13.79,39.53-5a307.52,307.52,0,0,0,78.77,33.49c18.44,5.05,24.38,16.26,24.47,33.19.11,22,.24,43.94,0,65.9-.16,15.9,7.06,23.79,23.21,23.49,13.42-.25,26.85,0,40.27,0,27.73-.05,31.16-3.53,31.25-32,.07-20.75-.22-41.5.15-62.25.27-15,6.93-25.77,22.66-28.88,28.45-5.63,54.49-17.45,79.26-31.93,16.15-9.44,29.57-8.36,42.59,5.18,14.8,15.39,30,30.43,45.28,45.33,14,13.6,22.19,13.6,35.72.29,10.43-10.27,20.67-20.76,30.77-31.36,13.34-14,13.47-22.25.2-35.85-14.91-15.3-29.83-30.6-45.37-45.24-13.7-12.9-15.59-26.55-5.92-42.48,9.83-16.18,19-33.07,23.64-51.32C1523.91,1623,1528.62,1637.11,1581,1635.15Z'
        transform='translate(-765.01 -944.83)'
      />
      <path
        className='gears-cls-2'
        d='M1650.44,1117.59c10-.58,20.5,2.78,30.69,6.72,11.23,4.34,17.58,1.47,25.75-8.07,10.69-12.47,10.25-21.41,2.43-34.94-24.92-43.12-15.92-72.67,27.57-96.66,2.14-1.18,4.29-2.33,6.42-3.5,54.83-30.13,79-23.52,109.86,30.1,3.57,6.2,6.09,14.54,16,10.38,10.72-4.52,27.91,5.72,31.41-16,3-18.66,11.72-34.73,26.54-48.6,27-25.27,120.18,2.89,129.48,37.35,5.49,20.35,2.55,38.51-3.85,57-3.14,9.12-3.85,16,6.24,21.13,9.77,5,15.44,19.37,31,9,17.7-11.87,36.54-21.67,59.84-15.28,36.48,10,73.32,74.39,62.59,110.46-6.51,21.88-22.4,35.22-42.21,42.64S2158,1241,2157.49,1254c-.5,13.86,10.28,13.48,18.54,15.26,47.43,10.18,67.09,50.17,49.72,91-3.55,8.33-4.89,17.58-7.86,26.19-11.13,32.26-40.76,48-74,39.41-4.12-1.06-8.49-1.77-12.2-3.68-14.44-7.44-22.11-.05-31.85,10.38-11.11,11.89-5.36,20,.3,30.19,26,46.94,17.91,75-28.87,100.6-13.29,7.27-25.79,16.64-41.19,19.2-29.82,5-50.87-7.29-68.64-39.74-5.85-10.67-9.76-19.25-26.69-18-18.35,1.41-22.65,9.06-26.45,24.35-11.24,45.22-40.26,61-85.39,48.13-7.61-2.16-15.15-4.54-22.73-6.79-41.22-12.22-56.86-41.12-45.13-82.75,3.41-12.12,10.31-22.8-5.21-35.06-14.25-11.24-23.24-8.75-36.45-1.26-40.91,23.21-71.94,14-94.49-26.74q-5.75-10.38-11.44-20.81c-21-38.69-13.11-70,25.76-90.37,17.2-9,23.64-19.35,21-38.22-1.22-8.74-3.56-13.06-12-14.82a165.75,165.75,0,0,1-22.75-6.62c-29-10.56-44.79-37.82-38.9-68.11a473.06,473.06,0,0,1,11.32-46.06C1599.85,1133.11,1621.68,1117.48,1650.44,1117.59Zm131.47-11.09a25.66,25.66,0,0,1-8.91,19.37c-16.27,14.2-29,31.09-40.28,49.4-7.14,11.64-17.83,16.16-31.36,12.68-7.65-2-15.28-4-22.86-6.26-34.92-10.21-34.3-10.07-44,26.13-2.75,10.19.61,13.19,8.7,15.44,13.47,3.75,26.84,7.94,40.44,11.19,17.42,4.15,26.09,14.47,25.3,32.54a196.7,196.7,0,0,0,5.32,56.19c3.62,14.64-1.44,26.35-14.69,34.13q-10.24,6-20.51,12c-30.72,17.84-30.25,17.54-11.39,47.46,5.83,9.24,10.62,9.38,18.89,4.43,12.54-7.49,25.5-14.28,38.4-21.16,12.26-6.54,23.93-5,33.38,5a247.3,247.3,0,0,0,48.13,39.07c12.2,7.7,17,18.59,12.78,32.88-2.23,7.58-4.23,15.23-6.45,22.81-10.23,35-10.13,34.51,25,43.48,10.11,2.58,14.72.12,17.2-9.33,2.62-10,5.55-19.91,8.48-29.82,8.87-30,14-33.76,44.93-33.92,9.75-.05,19.64.31,29.21-1.16,41.39-6.32,41.36-6.54,61.91,29.13,18.42,32,18.23,31.65,49.55,13.07,8.27-4.91,9.88-9.25,5.08-17.39-7.1-12.07-13.18-24.73-20.24-36.82-8.31-14.24-6.44-26.67,5.4-37.81,14.75-13.89,26.91-29.76,37.41-47.09,8.2-13.52,19.84-19.22,35.75-13.21,5.66,2.14,11.72,3.22,17.57,4.89,35.65,10.14,35.5,10.12,43.4-25.94,1.91-8.71.57-13.57-9.22-15.75-13.62-3-26.94-7.48-40.33-11.51-15.18-4.57-23.66-14.13-23-30.78a188.12,188.12,0,0,0-5.58-56.13c-3.93-15,1.46-27.64,15.61-35.55,6.38-3.56,12.81-7,19.2-10.58,32-17.7,31.68-17.5,12.8-48.46-5.5-9-10.34-10.12-19-4.71-11.83,7.46-24.36,13.82-36.46,20.87-13.48,7.87-25.59,6.33-36.36-4.86a230.62,230.62,0,0,0-47-37.53c-13.71-8.29-18.19-20.3-13.16-36,4.45-13.89,7.76-28.14,12.1-42.07,1.91-6.14,1.73-9.79-5-13-32.16-15.09-38.92-12.35-48.65,21-2.05,7-4.28,14-6.25,21-4.4,15.73-15.14,23-31,23-18.91,0-37.67.3-56.32,4.49-16.83,3.78-29.84-2.12-37.43-18.45-2.56-5.5-6.08-10.55-9.14-15.82-18.76-32.35-18.59-32.09-50.38-11.65-7.33,4.71-8.84,8.88-4.51,16.11,7.2,12,14.07,24.23,21.07,36.37C1778.76,1093.59,1782.18,1099.39,1781.91,1106.5Z'
        transform='translate(-765.01 -944.83)'
      />
      <path
        className='gears-cls-1'
        d='M1384.31,1602.07c.84-86-67-154.84-153.7-154.71-76.78.11-155.95,61.76-154.43,154.28,1.55,95.11,61.75,147.7,154.35,151.89C1312.34,1757.23,1384.17,1691.77,1384.31,1602.07Z'
        transform='translate(-765.01 -944.83)'
      />
      <path
        className='gears-cls-1'
        d='M1903.64,1370.83c55.32,4.71,104.62-46.13,102.4-101.23-2.31-57.09-45.34-95.21-106.44-93.4-48.31,1.44-92.77,45.24-93.1,88.45C1805.91,1341.94,1855.81,1371.9,1903.64,1370.83Z'
        transform='translate(-765.01 -944.83)'
      />
    </SvgIcon>
  );
}

export function ImpactIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      width='1556.88'
      height='1654.3'
      viewBox='0 0 1556.88 1654.3'
    >
      <defs>
        <style>
          {
            '.impact-cls-1,.impact-cls-4,.impact-cls-5,.impact-cls-6{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{clip-path:url(#clip-path-2);}.impact-cls-4,.impact-cls-5,.impact-cls-6{stroke:currentColor;stroke-miterlimit:10;}.impact-cls-5{stroke-width:2px;}.impact-cls-6{stroke-width:5px;}'
          }
        </style>
        <clipPath id='clip-path' transform='translate(-657.68 -625.38)'>
          <rect
            className='impact-cls-1'
            x='2715.36'
            y='3158.71'
            width='37.69'
            height='53.96'
            transform='translate(5468.4 6371.38) rotate(180)'
          />
        </clipPath>
        <clipPath id='clip-path-2' transform='translate(-657.68 -625.38)'>
          <rect
            className='impact-cls-1'
            x='959.72'
            y='3079.46'
            width='1406.49'
            height='814.11'
          />
        </clipPath>
      </defs>
      {/* <g className='cls-2'>
        <g className='cls-3'>
          <path
            className='impact-cls-4'
            d='M1392,3566.45,1626.7,3438l-142-225.35c-17.94,11.38-86.59,57.9-114,150.51C1340.37,3466,1383.13,3549.9,1392,3566.45Z'
            transform='translate(-657.68 -625.38)'
          />
          <path
            className='impact-cls-4'
            d='M1490.23,3209.21l139.59,224-.57-267a254.64,254.64,0,0,0-139,43Z'
            transform='translate(-657.68 -625.38)'
          />
          <path
            className='impact-cls-4'
            d='M1635.68,3166.76l-.76,264.19,167.81-202.2a258.75,258.75,0,0,0-167-62Z'
            transform='translate(-657.68 -625.38)'
          />
          <path
            className='impact-cls-5'
            d='M1807.27,3232.91q-86.94,103.17-173.86,206.36L1397.94,3570.7c9.43,16.52,65.93,112,180.29,136.06,113.72,24,238.79-32.23,295.08-142C1930,3454.2,1903.12,3316.32,1807.27,3232.91Z'
            transform='translate(-657.68 -625.38)'
          />
        </g>
      </g> */}
      <path
        className='impact-cls-6'
        d='M2214.59,1791.29c-128.39,257.09-334,411.24-617.56,460.09-39.88,6.87-80.44,8.46-121,7.56-173,.46-331.06-48.28-471.35-149.42-190.31-137.19-304.93-322.9-336.73-555.35-45.25-330.68,110.4-647.12,400.25-816.53,143.3-83.75,298.83-118.37,464-108,96.08,6.05,188.83,28.58,276.37,69.34,17.39,8.1,25.9,5.37,34-10.93,7.91-15.93,17.85-30.86,27-46.19,4.25-7.14,9-13.51,18.72-13.2,10.17.33,13.52,7.68,16.4,15.44q42.68,115,85.22,230c5.48,14.81,3.92,27-15.24,26.6-73.75-1.47-146.58,12-220.15,12.79-11.53.13-25.52,6-33.12-7.76-7.33-13.31,3.92-22.91,9.85-32.89,29.61-49.83,29.93-50.22-25.3-69.18q-262.69-90.17-516.16,23.84c-90,40.29-165.65,98.38-228.84,173.4-332.93,395.25-133.71,989.34,368.51,1106.73,265.45,62,556.42-53,710-283,2.25-3.37,4.32-6.85,6.61-10.2,6.94-10.18,15.4-18.11,27.73-9.36l.27.19c11.72,8.49,5.84,18.5-.21,27.69-73.05,110.89-168.56,196.76-288.44,254-415,198-904.34-38-1004.22-487-52.77-237.3,5.07-450.29,166-632.48,56.62-64.1,125-115,202.25-155,204.75-105.8,411.26-107.19,621-18.21,34,14.43,34.89,18.33,16.51,49.78-2.86,4.9-6,9.66-8.65,14.66-2.93,5.49-9.68,10.69-6,17.27,3.79,6.86,11.71,3.42,17.83,3.19,46.11-1.72,92.2-4.27,138.32-5.32,19.09-.44,24.62-6.15,17.38-24.87-18.13-46.82-35.07-94.1-52.69-141.11-2.17-5.79-2.35-14.41-9.62-15.58-7.89-1.27-9.64,7.4-12.76,12.66-31.44,53.08-24.4,47.38-77.29,23.69-432.6-193.79-944.07,47.55-1070,504.75-122.66,445.46,157.17,894.44,611,980.33,346.32,65.55,699.51-116.16,850.34-437.06,6.05-12.89,9.16-36.42,28.73-29.35a34.09,34.09,0,0,1,4.41,2C2239.14,1760.48,2220.89,1778.68,2214.59,1791.29Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M1288.58,2015.7c1.88-8.13,4.17-18.39,6.61-28.62,7.94-33.21-11.53-52.33-44.78-43.92-6.28,1.59-12.85,2.45-18.79,4.87-17.11,7-27.58,1.51-34.18-15.44q-16.74-43-35-85.45c-6-13.94-2.14-23.21,10.64-30.19,8.53-4.65,16.8-9.79,25-15,22.86-14.5,22.48-43.8-.85-58-45-27.5-45.56-17.59-23.3-72.51,7-17.26,15-34.18,21-51.78,7.17-21,18.68-26.86,40.73-20.24,16.86,5.06,36.09,17.47,52.8-4.83,7.44-9.94,12.91-17.44,8.16-30-3.38-9-4.4-18.89-7-28.24-4.1-15,.34-24.59,15.38-30.46,27.86-10.88,55.59-22.22,82.81-34.6,16.8-7.64,27.71-3.54,35.89,12.17,4.48,8.61,9.36,17.05,14.62,25.2,12.42,19.27,41.73,19.74,53.36.33,32-53.44,22-49.15,81.43-24.46,17.93,7.44,35.62,15.51,53.8,22.26,14.2,5.28,18.49,14.35,14.64,28.4-2.78,10.15-5.59,20.31-7.82,30.59-5.11,23.49,16.29,46.37,39.07,39.54,58.25-17.49,51.36-11.91,73.24,40.59,4.67,11.21,9.45,22.39,14.06,33.63,15.89,38.73,15.87,38.75-19.53,60.21-12.34,7.48-24.33,13.18-24.44,32.23-.12,19.28,9.93,27,24,35,36.2,20.72,36,21.07,20,60.06-8.33,20.22-17.56,40.11-24.93,60.68-6.91,19.3-17.08,28.69-38.24,19.75-7.36-3.11-15.58-4.21-23.45-6.08-22.69-5.39-44.49,15.43-40.15,38.28,10.23,53.79,10.21,53.75-40.93,74.55-16.48,6.71-33.07,13.2-49.22,20.65s-27.86,4.92-36-11.66c-3.92-7.95-9-15.36-13.71-22.91-14-22.29-42.25-22.66-56.06-.78-28.06,44.44-28.06,44.43-78.2,23.53-18.66-7.78-37.28-15.67-56-23.23C1293.17,2035.72,1286.81,2029.58,1288.58,2015.7Zm306.58-50.37c-1.09-9.49.61-15.41,5.62-20.37,12.07-11.94,24.17-23.87,36-36,7.21-7.42,15.39-7,24.65-5.16,43.8,8.48,43.83,8.32,61.64-34.34a33.29,33.29,0,0,1,2.1-4.38c10.13-16.63,6.79-28.77-11.88-35.84-24.55-9.3-35.42-26-29.92-52.72,1.43-7,.44-14.59-.44-21.8-1.56-12.78,3.28-21.12,14.17-28.16,36.86-23.82,36.66-24.14,20.12-63.77-1.56-3.74-3.55-7.34-4.67-11.2-4.39-15.23-13.25-21.84-28.76-14.79-26.71,12.14-48.11,7-64.39-18.16-3-4.59-7.91-8.22-12.57-11.34-12-8-13.47-18.85-10.65-31.94,8.89-41.21,8.72-41.25-29.92-57.35-3.74-1.55-7.65-2.84-11.08-4.91-15.16-9.16-26.2-5.44-32.37,10.81-10.13,26.7-28.44,37.46-56.74,31.62-6.18-1.28-13-.63-19.37.45-12.9,2.2-21-2.55-28.12-13.58-24-37.24-24.35-37-65.63-19.83-3,1.25-5.85,3-9,3.75-15.78,4-21.73,13.3-15,28.61,11.6,26.53,7.41,48-18.1,64.16-4.63,2.92-8.15,7.88-11.55,12.39-8.28,11-18.15,13.87-31.9,10.75-41.85-9.51-42-9-57.94,30-2.46,6-4.6,12.15-7.45,18-5.47,11.13-2.13,18.92,8.88,23.2,29.56,11.5,44.24,30.9,35.44,63.7-.79,3-.3,6.57.51,9.64,4.39,16.81-2.44,27.11-17,35.78-33.42,19.94-33.09,20.5-18.31,56.73.3.75.66,1.47,1,2.22,13.59,33.37,13.56,33.23,48,24.76,10.74-2.63,22.09-8,32.12,1.69,12.77,12.39,25.16,25.16,37.81,37.67,6.59,6.51,6.49,14.16,4.91,22.52-8.6,45.56-8.52,45.57,35.08,62.87a69.61,69.61,0,0,1,8.9,3.84c12.28,7,20.08,4.23,26.94-8.71,6.3-11.88,10.11-30,23.35-32.48,21.89-4.12,45.14-3.38,67.57-1.56,14.72,1.2,16.25,18.59,24.28,28.23,5.43,6.51,7.18,21.23,16.53,18.37,22.19-6.78,45.15-14.78,63.8-27.94,10.15-7.17-3.32-23.62-4.73-36.1A69.53,69.53,0,0,0,1595.16,1965.33Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M2261.8,1272.84c-.16,16.18-11.15,22.08-20.59,27.28-24.33,13.39-30.29,31.06-31,59.86-.89,37.88,6.75,64.35,41.34,81.48,12.75,6.31,12.85,18,6.51,29.19-17.13,30.26-34.75,60.23-52.23,90.28-7.07,12.15-17.62,14.53-28.92,7.55-31.63-19.53-57.53-13.82-90.17,4.93-28.09,16.13-37.56,34-37.61,61.85,0,19.57-9.76,28-27.94,28.16-33.21.28-66.43.07-99.64,0-14.47-.05-21-9.27-20.45-21.92,1.7-36.7-15.41-56-48.16-73.4-26.22-14-45.45-18.69-70.06-3.34-19.45,12.14-34,8.44-45.05-13.4-13.14-25.95-28.27-51-43.66-75.71-9.66-15.53-7.84-27.12,7.33-37,4.08-2.64,7.8-5.85,12-8.29,20.53-12,33.56-27.35,24.65-53a4.58,4.58,0,0,1-.11-2.41c8.8-37.86-3.58-64.91-39.29-82.13-12.79-6.17-14.12-18-6.3-31,17.08-28.45,33.49-57.3,49.83-86.19,7.73-13.67,18.29-19,31.93-10,30.74,20.17,56.1,14.89,87.43-4.65,25-15.58,39.51-29.84,38.33-58.79-1-25.64,12-33.5,36.47-32,28.24,1.75,56.69.81,85,.14,16.52-.39,27.3,4.75,26.69,22.88-1.17,35,15.79,53.06,46.32,71.71,30.38,18.57,52.6,16.58,79,1.51,16.58-9.48,26.49-4.68,35.18,11.2,15.15,27.66,31.68,54.55,47.41,81.89C2258.82,1264.25,2260.47,1269.67,2261.8,1272.84Zm-87.89,258.42c9.61,2.83,11.71-3.31,14.49-8,7-11.83,12.68-24.68,21-35.53,13.92-18.18,12.36-31.62-8.74-41.76-25.52-12.26-31-32.38-24-58.39,5-18.44,1.56-37.14-1.92-55.45-3.06-16.11,1.39-26.94,15.46-36.9,33.81-23.92,33.25-24.7,12.27-60.7-20.47-35.1-20.81-35.84-57.44-18.93-16.2,7.48-28.16,6.71-41.49-5.75a150.5,150.5,0,0,0-58.51-33.8c-15.33-4.75-21.56-13.78-23.79-29.38-6.22-43.47-6.83-43.38-50.37-43.42a28.13,28.13,0,0,1-4.86,0c-25.34-4.52-38,4.91-36.89,31.78,1,23.87-9.41,38.49-34.06,45.15-18.59,5-35.41,16.46-49.53,30-12.26,11.73-23.65,13.4-39.29,6.29-39-17.74-39.34-17.08-60.87,20.73-.8,1.41-1.55,2.85-2.32,4.27-18.52,34.1-22.68,26.42,11.24,50,17.86,12.44,24.52,25.38,19.21,46.74-5.12,20.6-3.87,42.1.67,62.78,3.63,16.52-.85,27.31-14.66,37.21-33.62,24.1-33.23,24.65-12.65,60.94.8,1.41,1.6,2.82,2.44,4.21,22.58,37.6,13.66,33.87,52.33,16.35,17.34-7.84,31-9,46,5.61,15.72,15.26,35.6,25.65,56.56,32.4,15.06,4.85,21.63,13.14,23.58,29.27,5.3,43.89,6.12,43.79,50,43.77.81,0,1.62,0,2.43,0,35.63-.88,37.53,8,40-35.57,1.2-21.35,9.35-33.84,30.85-40,21.09-6,39.39-18.91,55.72-33.76,10.35-9.41,21.07-10.66,33.47-4.88C2151.89,1522,2163.89,1526.92,2173.91,1531.26Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M1589.27,1165.06c-.06,150.57-122.88,273.77-273.53,274.37-149.91.6-274.17-123.69-274.15-274.2a273.62,273.62,0,0,1,273.87-273.94C1466.63,891.18,1589.32,1013.85,1589.27,1165.06Zm-282.58,239.38c126.46,7.06,240.67-96.27,249-225.24,8.44-131.15-95.07-247.21-227.21-254.78s-247,95.6-253.75,228.1C1067.9,1286,1170,1396.82,1306.69,1404.44Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M1464.58,1880.11c-60.76-.39-107.68-47.8-107.17-108.3.49-58.17,48.87-106.09,107.52-106.48s109.39,50,109.14,108C1573.8,1833,1525.07,1880.49,1464.58,1880.11Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M1879.66,1366.15c.25-53.5,42.09-95.14,95.5-95.07,52.82.08,95.72,42.89,95.72,95.51,0,53.43-44.73,97.91-97.44,96.89C1920.4,1462.46,1879.41,1419.91,1879.66,1366.15Z'
        transform='translate(-657.68 -625.38)'
      />
      <path
        className='impact-cls-6'
        d='M1165.07,1137.32c9.26-.14,14.41,6.6,20.1,12.24,27.06,26.81,55.25,52.63,80.57,81,15.19,17,23.59,14.27,38-.68,43.19-45,88-88.4,132.19-132.43,3.44-3.43,6.67-7.11,10.36-10.25,8.27-7.06,17.52-9.66,26.1-1.37,9.17,8.87,5.07,17.75-2.53,25.39-16,16.08-32.26,31.91-48.32,47.94-39,38.93-78.49,77.4-116.64,117.14-14.75,15.35-25.68,15.41-40.24.35-34.93-36.11-70.83-71.28-106.33-106.84-6.64-6.66-11.43-14-6.86-23.79C1154.08,1140.29,1159.1,1138,1165.07,1137.32Z'
        transform='translate(-657.68 -625.38)'
      />
    </SvgIcon>
  );
}

export function ShootingTargetIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      width=' 1287.65'
      height='1260.41'
      viewBox='0 0 1287.65 1260.41'
    >
      <defs>
        <style>
          {
            '.target-cls-1,.target-cls-2,.target-cls-3,.target-cls-4,.target-cls-5{fill:none;stroke:currentColor;stroke-miterlimit:10;}.target-cls-1{stroke-width:5px;}.target-cls-2{stroke-width:8px;}.target-cls-3{stroke-width:23px;}.target-cls-4{stroke-width:25px;}.target-cls-5{stroke-width:16px;}'
          }
        </style>
      </defs>
      <circle className='target-cls-1' cx='643.83' cy='654.01' r='161.04' />
      <ellipse
        className='target-cls-1'
        cx='643.83'
        cy='648.33'
        rx='324.57'
        ry='308.47'
      />
      <ellipse
        className='target-cls-2'
        cx='643.83'
        cy='648.33'
        rx='639.83'
        ry='608.08'
      />
      <ellipse
        className='target-cls-1'
        cx='643.83'
        cy='654.01'
        rx='485.12'
        ry='461.05'
      />
      <path
        className='target-cls-3'
        d='M1979,930.3q-7.38,58-14.75,116h117.06'
        transform='translate(-856.17 -871.29)'
      />
      <path
        className='target-cls-4'
        d='M1524,1496.92l324.53-332.23q130.41-133.49,260.81-267'
        transform='translate(-856.17 -871.29)'
      />
      <path
        className='target-cls-5'
        d='M2037.51,872.3q-7.37,58-14.75,116h117.07'
        transform='translate(-856.17 -871.29)'
      />
    </SvgIcon>
  );
}
