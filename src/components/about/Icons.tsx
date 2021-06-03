import React from "react";
import styled from "styled-components";
import config from "../../data/config";
import PropTypes from "prop-types";

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  svg > path {
    fill: ${({ theme }) => theme.titleColor};
  }
`;

interface IconsProps {
  name?: "Email" | "Linkedin" | "Github" | "Twitter" | "Freecodecamp" | "Hackerrank" | "Reddit";
}

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case "Linkedin":
      return (
        <IconLink href={config.socialLinks.linkedin} aria-label="Linkedin" target="_blank" title="Linkedin">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 1.5H2.99531C2.17031 1.5 1.5 2.17969 1.5 3.01406V20.9859C1.5 21.8203 2.17031 22.5 2.99531 22.5H21C21.825 22.5 22.5 21.8203 22.5 20.9859V3.01406C22.5 2.17969 21.825 1.5 21 1.5ZM7.84687 19.5H4.73438V9.47812H7.85156V19.5H7.84687ZM6.29062 8.10938C5.29219 8.10938 4.48594 7.29844 4.48594 6.30469C4.48594 5.31094 5.29219 4.5 6.29062 4.5C7.28437 4.5 8.09531 5.31094 8.09531 6.30469C8.09531 7.30312 7.28906 8.10938 6.29062 8.10938ZM19.5141 19.5H16.4016V14.625C16.4016 13.4625 16.3781 11.9672 14.7844 11.9672C13.1625 11.9672 12.9141 13.2328 12.9141 14.5406V19.5H9.80156V9.47812H12.7875V10.8469H12.8297C13.2469 10.0594 14.2641 9.22969 15.7781 9.22969C18.9281 9.22969 19.5141 11.3062 19.5141 14.0062V19.5Z" />
          </svg>
        </IconLink>
      );
    case "Github":
      return (
        <IconLink href={config.socialLinks.github} aria-label="Github" target="_blank" title="Github">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15156 18.6281C8.15156 18.7219 8.04375 18.7969 7.90781 18.7969C7.75312 18.8109 7.64531 18.7359 7.64531 18.6281C7.64531 18.5344 7.75313 18.4594 7.88906 18.4594C8.02969 18.4453 8.15156 18.5203 8.15156 18.6281ZM6.69375 18.4172C6.66094 18.5109 6.75469 18.6187 6.89531 18.6469C7.01719 18.6937 7.15781 18.6469 7.18594 18.5531C7.21406 18.4594 7.125 18.3516 6.98438 18.3094C6.8625 18.2766 6.72656 18.3234 6.69375 18.4172ZM8.76562 18.3375C8.62969 18.3703 8.53594 18.4594 8.55 18.5672C8.56406 18.6609 8.68594 18.7219 8.82656 18.6891C8.9625 18.6562 9.05625 18.5672 9.04219 18.4734C9.02812 18.3844 8.90156 18.3234 8.76562 18.3375ZM11.85 0.375C5.34844 0.375 0.375 5.31094 0.375 11.8125C0.375 17.0109 3.64688 21.4594 8.32031 23.025C8.92031 23.1328 9.13125 22.7625 9.13125 22.4578C9.13125 22.1672 9.11719 20.5641 9.11719 19.5797C9.11719 19.5797 5.83594 20.2828 5.14688 18.1828C5.14688 18.1828 4.6125 16.8187 3.84375 16.4672C3.84375 16.4672 2.77031 15.7312 3.91875 15.7453C3.91875 15.7453 5.08594 15.8391 5.72812 16.9547C6.75469 18.7641 8.475 18.2437 9.14531 17.9344C9.25313 17.1844 9.55781 16.6641 9.89531 16.3547C7.275 16.0641 4.63125 15.6844 4.63125 11.175C4.63125 9.88594 4.9875 9.23906 5.7375 8.41406C5.61562 8.10938 5.21719 6.85312 5.85938 5.23125C6.83906 4.92656 9.09375 6.49688 9.09375 6.49688C10.0312 6.23438 11.0391 6.09844 12.0375 6.09844C13.0359 6.09844 14.0438 6.23438 14.9813 6.49688C14.9813 6.49688 17.2359 4.92188 18.2156 5.23125C18.8578 6.85781 18.4594 8.10938 18.3375 8.41406C19.0875 9.24375 19.5469 9.89062 19.5469 11.175C19.5469 15.6984 16.7859 16.0594 14.1656 16.3547C14.5969 16.725 14.9625 17.4281 14.9625 18.5297C14.9625 20.1094 14.9484 22.0641 14.9484 22.4484C14.9484 22.7531 15.1641 23.1234 15.7594 23.0156C20.4469 21.4594 23.625 17.0109 23.625 11.8125C23.625 5.31094 18.3516 0.375 11.85 0.375ZM4.93125 16.5422C4.87031 16.5891 4.88438 16.6969 4.96406 16.7859C5.03906 16.8609 5.14687 16.8938 5.20781 16.8328C5.26875 16.7859 5.25469 16.6781 5.175 16.5891C5.1 16.5141 4.99219 16.4812 4.93125 16.5422ZM4.425 16.1625C4.39219 16.2234 4.43906 16.2984 4.53281 16.3453C4.60781 16.3922 4.70156 16.3781 4.73438 16.3125C4.76719 16.2516 4.72031 16.1766 4.62656 16.1297C4.53281 16.1016 4.45781 16.1156 4.425 16.1625ZM5.94375 17.8312C5.86875 17.8922 5.89687 18.0328 6.00469 18.1219C6.1125 18.2297 6.24844 18.2437 6.30937 18.1688C6.37031 18.1078 6.34219 17.9672 6.24844 17.8781C6.14531 17.7703 6.00469 17.7563 5.94375 17.8312ZM5.40938 17.1422C5.33437 17.1891 5.33437 17.3109 5.40938 17.4188C5.48438 17.5266 5.61094 17.5734 5.67188 17.5266C5.74687 17.4656 5.74687 17.3438 5.67188 17.2359C5.60625 17.1281 5.48438 17.0813 5.40938 17.1422Z" />
          </svg>
        </IconLink>
      );
    case "Twitter":
      return (
        <IconLink href={config.socialLinks.twitter} aria-label="Twitter" target="_blank" title="Twitter">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.533 7.11163C21.5482 7.32482 21.5482 7.53805 21.5482 7.75124C21.5482 14.2537 16.599 21.7461 7.5533 21.7461C4.76648 21.7461 2.17767 20.939 0 19.538C0.395953 19.5837 0.776625 19.5989 1.18781 19.5989C3.48727 19.5989 5.60405 18.8223 7.29441 17.4974C5.13197 17.4517 3.31978 16.0355 2.69541 14.0863C3 14.1319 3.30455 14.1624 3.62437 14.1624C4.06598 14.1624 4.50764 14.1014 4.91878 13.9949C2.66498 13.538 0.974578 11.5583 0.974578 9.16747V9.10658C1.62937 9.47206 2.39086 9.70049 3.19791 9.73091C1.87303 8.84764 1.00505 7.34005 1.00505 5.63446C1.00505 4.72077 1.24866 3.88321 1.67508 3.15224C4.09641 6.137 7.73602 8.08621 11.8172 8.29944C11.7411 7.93396 11.6954 7.55328 11.6954 7.17257C11.6954 4.46188 13.8883 2.25378 16.6141 2.25378C18.0304 2.25378 19.3095 2.84769 20.208 3.80708C21.3197 3.59389 22.3857 3.18271 23.3299 2.61927C22.9643 3.76142 22.1877 4.72082 21.1674 5.32991C22.1573 5.22336 23.1167 4.94919 23.9999 4.56852C23.33 5.5431 22.4924 6.41108 21.533 7.11163Z" />
          </svg>
        </IconLink>
      );
    case "Freecodecamp":
      return (
        <IconLink href={config.socialLinks.freecodecamp} aria-label="Freecodecamp" target="_blank" title="Freecodecamp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.05084 5.34208C4.48251 4.89833 4.71751 4.62875 4.71751 4.42958C4.71751 4.31458 4.63751 4.2 4.55792 4.12042C4.4562 4.04623 4.33421 4.00494 4.20834 4.00208C3.85501 4.00208 3.33667 4.36833 2.71501 5.0725C0.986674 7.04167 0.10459 8.95042 0.140423 11.7642C0.176257 14.5779 0.86834 16.6392 2.39292 18.5088C3.17584 19.4942 3.77584 20 4.20417 20C4.33554 19.989 4.45892 19.9324 4.55292 19.84C4.63251 19.725 4.71167 19.6054 4.71167 19.4908C4.71167 19.2563 4.55084 18.9825 4.16167 18.6346C2.30959 16.8708 1.35667 14.5929 1.35001 11.7596C1.34376 9.2 2.25001 7.07625 4.05084 5.34208ZM9.97792 18.8363C10.0021 18.8517 10.0158 18.8592 10.0158 18.8592L9.97792 18.8363ZM13.8858 18.8592L13.8929 18.8538C13.885 18.8592 13.8821 18.8613 13.8858 18.8592ZM14.0163 12.2683C13.3396 12.0954 16.1167 8.81458 11.1808 4.88625C11.1808 4.88625 11.8283 6.94375 8.56292 11.535C5.46834 15.8829 9.54042 18.5654 9.97959 18.8363C9.69917 18.655 8.00459 17.3488 10.3775 13.4762C10.8358 12.7137 11.4413 12.0233 12.19 10.4696C12.19 10.4696 12.8529 11.405 12.5067 13.4333C11.9875 16.5 14.75 15.6213 14.7917 15.6642C15.7396 16.78 14.0533 18.7271 13.8925 18.8538C14.1213 18.7017 18.7971 15.6038 15.2675 11.0163C15.0179 11.2667 14.6925 12.4413 14.0163 12.2683ZM21.2867 5.07042C20.6667 4.36625 20.1467 4 19.7917 4C19.6658 4.00286 19.5438 4.04415 19.4421 4.11833C19.3625 4.19792 19.2825 4.3125 19.2825 4.4275C19.2825 4.62667 19.5158 4.89667 19.9492 5.34C21.7504 7.07375 22.6575 9.19792 22.65 11.7592C22.6433 14.5925 21.6917 16.8688 19.8383 18.6342C19.4492 18.9821 19.2892 19.2558 19.2883 19.4904C19.2883 19.605 19.3675 19.7246 19.4471 19.8396C19.5412 19.932 19.6645 19.9887 19.7958 20C20.2242 20 20.8242 19.4946 21.6071 18.5088C23.1317 16.64 23.8213 14.5763 23.8596 11.7642C23.8979 8.95208 23.0133 7.04167 21.2867 5.07042Z" />
          </svg>
        </IconLink>
      );
    case "Hackerrank":
      return (
        <IconLink href={config.socialLinks.hackerrank} aria-label="Hackerrank" target="_blank" title="Hackerrank">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3828 6C21.7031 4.83047 13.3655 0 12.0075 0C10.6495 0 2.30859 4.81828 1.63312 6C0.957654 7.18172 0.953904 16.8187 1.63312 18C2.31234 19.1813 10.6509 24 12.0075 24C13.3641 24 21.7031 19.1756 22.3823 18C23.0616 16.8244 23.0625 7.17188 22.3828 6ZM14.8186 19.4166C14.6311 19.4166 12.9009 17.7398 13.0373 17.603C13.0781 17.5622 13.3308 17.5336 13.86 17.5172C13.86 16.2877 13.8877 14.302 13.9041 13.4709C13.9041 13.3772 13.8834 13.3102 13.8834 13.1967H10.1367C10.1367 13.5295 10.1152 14.8936 10.2009 16.613C10.2117 16.8258 10.1269 16.8942 9.93187 16.8914C9.45703 16.8914 8.98172 16.8862 8.5064 16.8877C8.31422 16.8877 8.23125 16.8159 8.23734 16.6013C8.28047 15.0338 8.37797 12.6638 8.23031 6.63234V6.48375C7.77703 6.46734 7.4625 6.43687 7.42125 6.3975C7.28437 6.26062 9.04031 4.58391 9.22547 4.58391C9.41062 4.58391 11.1553 6.26109 11.0194 6.3975C10.9786 6.43828 10.6491 6.46734 10.2333 6.48375V6.63187C10.1198 7.83891 10.1395 10.3627 10.11 11.572H13.8722C13.8722 11.3587 13.8905 9.94359 13.8159 7.65141C13.8112 7.4925 13.8605 7.40906 14.0133 7.40766C14.5322 7.40391 15.0516 7.40156 15.5709 7.40484C15.7331 7.40484 15.7852 7.48547 15.7819 7.65703C15.6094 16.6237 15.75 15.998 15.75 17.5167C16.1658 17.5331 16.5384 17.5636 16.5792 17.603C16.7142 17.7394 15.0033 19.4166 14.8177 19.4166H14.8186Z" />
          </svg>
        </IconLink>
      );
    case "Reddit":
      return (
        <IconLink href={config.socialLinks.reddit} aria-label="Reddit" target="_blank" title="Reddit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6391 9.53911C19.9359 9.53911 19.3172 9.82974 18.8625 10.2844C17.1891 9.12661 14.9344 8.3813 12.4359 8.30161L13.7344 2.45161L17.8687 3.37974C17.8687 4.39224 18.6937 5.21724 19.7062 5.21724C20.7375 5.21724 21.5672 4.3688 21.5672 3.3563C21.5672 2.3438 20.7422 1.49536 19.7062 1.49536C18.9844 1.49536 18.3609 1.9313 18.0516 2.52661L13.4859 1.51411C13.2562 1.45317 13.0312 1.61724 12.9703 1.84692L11.5453 8.29692C9.06562 8.40005 6.83437 9.14536 5.15625 10.3032C4.70156 9.82974 4.05937 9.53911 3.35625 9.53911C0.749997 9.53911 -0.103128 13.036 2.28281 14.2313C2.19843 14.6016 2.16093 14.9954 2.16093 15.3891C2.16093 19.3172 6.58593 22.5 12.0187 22.5C17.475 22.5 21.9 19.3172 21.9 15.3891C21.9 14.9954 21.8578 14.5829 21.7547 14.2125C24.0937 13.0125 23.2312 9.53911 20.6391 9.53911V9.53911ZM6.06562 14.4797C6.06562 13.4485 6.89062 12.6188 7.92656 12.6188C8.93906 12.6188 9.76406 13.4438 9.76406 14.4797C9.76406 15.4922 8.93906 16.3172 7.92656 16.3172C6.89531 16.3219 6.06562 15.4922 6.06562 14.4797V14.4797ZM16.1109 18.8625C14.4047 20.5688 9.59062 20.5688 7.88437 18.8625C7.69687 18.6985 7.69687 18.4079 7.88437 18.2204C8.04843 18.0563 8.33906 18.0563 8.50312 18.2204C9.80625 19.5563 14.1281 19.5797 15.4875 18.2204C15.6516 18.0563 15.9422 18.0563 16.1062 18.2204C16.2984 18.4079 16.2984 18.6985 16.1109 18.8625ZM16.0734 16.3219C15.0609 16.3219 14.2359 15.4969 14.2359 14.4844C14.2359 13.4532 15.0609 12.6235 16.0734 12.6235C17.1047 12.6235 17.9344 13.4485 17.9344 14.4844C17.9297 15.4922 17.1047 16.3219 16.0734 16.3219Z" />
          </svg>
        </IconLink>
      );
    default:
      return (
        <IconLink href={config.socialLinks.email} aria-label="Email" title="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.75 3H2.25C1.00734 3 0 4.00734 0 5.25V18.75C0 19.9927 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V5.25C24 4.00734 22.9927 3 21.75 3ZM21.75 5.25V7.16273C20.699 8.01862 19.0234 9.3495 15.4412 12.1545C14.6518 12.7754 13.0881 14.2672 12 14.2498C10.9121 14.2674 9.34786 12.7752 8.55877 12.1545C4.97719 9.34992 3.30117 8.01877 2.25 7.16273V5.25H21.75ZM2.25 18.75V10.0499C3.32409 10.9054 4.8473 12.1059 7.16897 13.9239C8.19352 14.7304 9.98775 16.5108 12 16.5C14.0024 16.5108 15.7739 14.7563 16.8306 13.9243C19.1522 12.1064 20.6759 10.9055 21.75 10.05V18.75H2.25Z" />
          </svg>
        </IconLink>
      );
  }
};

Icons.propTypes = { name: PropTypes.string };

export default Icons;
