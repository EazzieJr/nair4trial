<template>
  <div class="Topbar">
    <div class="TopbarContainer between">
      <div class="Left start">
        <button v-if="back" class="Back" @click="goBack">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1248 21.0999L6.69982 12.6999C6.59982 12.5999 6.52882 12.4916 6.48682 12.3749C6.44482 12.2582 6.42415 12.1332 6.42482 11.9999C6.42482 11.8666 6.44549 11.7416 6.48682 11.6249C6.52815 11.5082 6.59915 11.3999 6.69982 11.2999L15.1248 2.8749C15.3582 2.64157 15.6498 2.5249 15.9998 2.5249C16.3498 2.5249 16.6498 2.6499 16.8998 2.8999C17.1498 3.1499 17.2748 3.44157 17.2748 3.7749C17.2748 4.10824 17.1498 4.3999 16.8998 4.6499L9.54982 11.9999L16.8998 19.3499C17.1332 19.5832 17.2498 19.8709 17.2498 20.2129C17.2498 20.5549 17.1248 20.8506 16.8748 21.0999C16.6248 21.3499 16.3332 21.4749 15.9998 21.4749C15.6665 21.4749 15.3748 21.3499 15.1248 21.0999Z" fill="#1C3E77"/>
          </svg>
        </button>
        
        <span class="PageTitle">
          {{ title }}
        </span>

        <button v-if="!back" class="avatar">
          <img src="images/dashboard-avatar.png" alt="">
        </button>
      </div>

      <div class="Mid">
        <span>
          {{ title }}
        </span>
      </div>

      <div class="Right">
        <div class="mobileView">
          <button @click="notificationHighlight = !notificationHighlight">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#FAFAFA"/>
              <path d="M16.018 7.66797C12.9839 7.66797 10.518 10.1338 10.518 13.168V15.8171C10.518 16.3763 10.2797 17.2288 9.99555 17.7055L8.94138 19.4563C8.29055 20.538 8.73971 21.7388 9.93138 22.1421C13.8822 23.4621 18.1447 23.4621 22.0955 22.1421C23.2047 21.7755 23.6905 20.4646 23.0855 19.4563L22.0314 17.7055C21.7564 17.2288 21.518 16.3763 21.518 15.8171V13.168C21.518 10.143 19.043 7.66797 16.018 7.66797Z" stroke="#1C3E77" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M17.7139 7.9343C17.4298 7.8518 17.1364 7.78763 16.8339 7.75096C15.9539 7.64096 15.1106 7.70513 14.3223 7.9343C14.5881 7.25596 15.2481 6.7793 16.0181 6.7793C16.7881 6.7793 17.4481 7.25596 17.7139 7.9343Z" stroke="#1C3E77" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.7686 22.4707C18.7686 23.9832 17.5311 25.2207 16.0186 25.2207C15.2669 25.2207 14.5702 24.909 14.0752 24.414C13.5802 23.919 13.2686 23.2224 13.2686 22.4707" stroke="#1C3E77" stroke-miterlimit="10"/>
            </svg>
          </button>
        </div>

        <div class="MenuActions hidden md:center">
          <div class="GiftcardActions hidden md:start" v-if="pageTitle.includes('dashboard-giftcards') && !pageTitle.includes('dashboard-giftcards-all-rates')  && !pageTitle.includes('dashboard-giftcards-sell') && !pageTitle.includes('dashboard-giftcards-buy')">
            <button class="start" v-for="action in actions.slice(0, 2)" :key="action.route" @click="$router.push(`${action.route}`)">
              <img class="Icon" :src="`/svg/${action.icon}-light.svg`" />

              <span>
                {{ action.title }}
              </span>
            </button>
          </div>


          <div class="homeAction hidden md:start" v-if="!pageTitle.includes('withdrawals')">
            <button class="start">
              <span>
                Download Report
              </span>
            </button>
          </div>
          

          <button class="notification"  @click="notificationHighlight = !notificationHighlight">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="white"/>
              <path d="M16.0183 7.66797C12.9842 7.66797 10.5183 10.1338 10.5183 13.168V15.8171C10.5183 16.3763 10.28 17.2288 9.99582 17.7055L8.94166 19.4563C8.29082 20.538 8.73999 21.7388 9.93166 22.1421C13.8825 23.4621 18.145 23.4621 22.0958 22.1421C23.205 21.7755 23.6908 20.4646 23.0858 19.4563L22.0317 17.7055C21.7567 17.2288 21.5183 16.3763 21.5183 15.8171V13.168C21.5183 10.143 19.0433 7.66797 16.0183 7.66797Z" stroke="#1C3E77" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M17.7141 7.93332C17.4299 7.85082 17.1366 7.78665 16.8341 7.74999C15.9541 7.63999 15.1108 7.70415 14.3224 7.93332C14.5883 7.25499 15.2483 6.77832 16.0183 6.77832C16.7883 6.77832 17.4483 7.25499 17.7141 7.93332Z" stroke="#1C3E77" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.7684 22.4717C18.7684 23.9842 17.5309 25.2217 16.0184 25.2217C15.2667 25.2217 14.57 24.91 14.075 24.415C13.58 23.92 13.2684 23.2233 13.2684 22.4717" stroke="#1C3E77" stroke-miterlimit="10"/>
            </svg>
          </button>

          <div class="divider"></div>

          <button class="avatar">
            <img src="images/dashboard-avatar.png" alt="">
          </button>

        </div>

        <div v-if="notificationHighlight" class="NotificationsHigh">
          <div class="Top between">
            <h4>
              Notifications
            </h4>

            <button class="close" @click="notificationHighlight = !notificationHighlight">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#6C7D98"/>
              </svg>
            </button>
          </div>

          <div class="Highlights">
            <div class="Notification" v-for="(data, index) in notifications" :key="index">
              <div class="top between">
                <div class="left start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="#A3D7F3" fill-opacity="0.17"/>
                    <path d="M16.2808 13.4528L15.6975 12.4845C15.575 12.2687 15.4642 11.8603 15.4642 11.6212V10.1453C15.4642 8.77449 14.6592 7.59033 13.4983 7.03616C13.195 6.49949 12.635 6.16699 11.9933 6.16699C11.3575 6.16699 10.7858 6.51116 10.4825 7.05366C9.34499 7.61949 8.55749 8.79199 8.55749 10.1453V11.6212C8.55749 11.8603 8.44665 12.2687 8.32415 12.4787L7.73499 13.4528C7.50165 13.8437 7.44915 14.2753 7.59499 14.672C7.73499 15.0628 8.06749 15.3662 8.49915 15.512C9.63082 15.897 10.8208 16.0837 12.0108 16.0837C13.2008 16.0837 14.3908 15.897 15.5225 15.5178C15.9308 15.3837 16.2458 15.0745 16.3975 14.672C16.5492 14.2695 16.5083 13.8262 16.2808 13.4528Z" fill="#2F99D4"/>
                    <path d="M13.6513 16.6728C13.4063 17.3495 12.7588 17.8337 12.0005 17.8337C11.5396 17.8337 11.0846 17.647 10.7638 17.3145C10.5771 17.1395 10.4371 16.9062 10.3555 16.667C10.4313 16.6787 10.5071 16.6845 10.5888 16.6962C10.723 16.7137 10.863 16.7312 11.003 16.7428C11.3355 16.772 11.6738 16.7895 12.0121 16.7895C12.3446 16.7895 12.6771 16.772 13.0038 16.7428C13.1263 16.7312 13.2488 16.7253 13.3655 16.7078C13.4588 16.6962 13.5521 16.6845 13.6513 16.6728Z" fill="#2F99D4"/>
                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#2F99D4"/>
                  </svg>

                  <span>
                    {{ data.title }}
                  </span>
                </div>

                <p class="timeline">
                  {{ data.timeline }}
                </p>
              </div>

              <div class="bottom start">
                <p>
                  {{ data.deats }}
                </p>

                <button>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.65663 2.17519L12.9754 8.4752C13.0504 8.5502 13.1036 8.63144 13.1351 8.71895C13.1666 8.80645 13.1821 8.9002 13.1816 9.0002C13.1816 9.10019 13.1661 9.19394 13.1351 9.28145C13.1041 9.36895 13.0509 9.4502 12.9754 9.5252L6.65663 15.8439C6.48163 16.0189 6.26288 16.1064 6.00038 16.1064C5.73788 16.1064 5.51288 16.0127 5.32538 15.8252C5.13788 15.6377 5.04413 15.4189 5.04413 15.1689C5.04413 14.9189 5.13788 14.7002 5.32538 14.5127L10.8379 9.0002L5.32538 3.48769C5.15038 3.31269 5.06288 3.09695 5.06288 2.84045C5.06288 2.58395 5.15663 2.3622 5.34413 2.17519C5.53163 1.98769 5.75038 1.89394 6.00038 1.89394C6.25038 1.89394 6.46913 1.98769 6.65663 2.17519Z" fill="#1C3E77"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="Bottom end">
            <button @click="seeAll">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      back: Boolean
    },

    data() {
      return {
        notifications: [
          {
            title: "Lorem ipsum dolor sit amet",
            timeline: "Feb 26,2023",
            deats: "Lorem ipsum dolor sit amet amet ameconsectetur. Enim aliquet purus..."
          },
          {
            title: "Lorem ipsum dolor sit amet",
            timeline: "Feb 26,2023",
            deats: "Lorem ipsum dolor sit amet amet ameconsectetur. Enim aliquet purus..."
          },
          {
            title: "Lorem ipsum dolor sit amet",
            timeline: "Feb 26,2023",
            deats: "Lorem ipsum dolor sit amet amet ameconsectetur. Enim aliquet purus..."
          }
        ],
        
        popupOpened: false,
        notificationHighlight: false,
      }
    },

    methods: {
    // create a method to get page title on mounted
      getPageTitle() {
        const routeName = this.$route.name;
        const route = this.$router.options.routes.find((r) => r.name === routeName);
        console.log(route)
        return route.meta.title;
      },

      toggleNotification() {

      }, 

      seeAll() {
        this.notificationHighlight = false
        this.$emit('openNotification')
      },

      goBack() {
        window.history.back();
      }
    },

    computed: {
      currentPage() {
        return this.$route.name
      },

      pageTitle() {
        return this.$route.name
      }
    },
  }
</script>

<style lang="postcss" scoped>
.Topbar {
  @apply py-2.5 md:py-5 lg:py-6 xl:pt-[22px] xl:pb-[27px] px-4 md:px-6 lg:px-8 xl:pl-[30px] xl:pr-10 bg-[#FAFAFA] border-b border-[#EEEEEE] sticky top-0 z-50;

  > .TopbarContainer {
    .Left {
      @apply md:space-x-6;

      > span {
        @apply uppercase hidden md:block text-2xl text-[#1C3E77] font-black
      }

      .avatar {
        @apply md:hidden;

        > img {
          @apply w-8 h-8
        }
      }
    }

    .Mid {
      @apply text-lg font-bold text-[#1C3E77] capitalize tracking-[-0.03em] md:hidden
    }

    .Right {
      @apply relative;
      
      .mobileView {
        @apply md:hidden
      }

      .MenuActions {
        @apply space-x-5 xl:space-x-6 relative;

        .GiftcardActions, .CryptoActions {
          @apply space-x-2.5;

          > button {
            @apply space-x-2.5 font-black text-white text-sm bg-secondary rounded-md pl-6 pr-7 py-2.5;

            > img {
              @apply w-6;
            }
          }
        }

        .homeAction {
          @apply bg-secondary rounded-md py-2.5 text-white px-6 xl:px-7
        }


        .divider {
          @apply w-px bg-[#C0C7D2] h-8
        }

      }

      .NotificationsHigh {
        @apply absolute right-0 top-10 xl:top-14 bg-white rounded-lg space-y-3.5 xl:space-y-4;
        box-shadow: 0px 0px 34px rgba(210, 210, 210, 0.25);

        .Top {
          @apply px-4 xl:px-5 pt-4 xl:pt-5;
          
          > h4 {
            @apply xl:text-lg font-bold text-secondary-text tracking-[-0.03em]
          }
        }

        .Highlights {
          @apply space-y-3.5 xl:space-y-4 px-3.5 xl:px-5;

          .Notification {
            @apply p-3.5 xl:p-4 bg-[#FAFAFA] w-[300px] xl:w-[345px] rounded-md;

            .top {
              .left {
                @apply space-x-2 xl:space-x-2.5;

                > svg {
                  @apply w-5 xl:w-6;
                }

                > span {
                  @apply text-priText font-bold text-sm xl:text-base tracking-[-0.04em];
                }
              }

              > p {
                @apply text-[10px] xl:text-xs text-opacity-80 text-priText
              }
            }

            .bottom {
              @apply pl-7 xl:pl-[34px];

              > p {
                @apply text-xs xl:text-sm text-priText text-opacity-80 leading-[157%] xl:leading-[157%];
              }

              > svg {
                @apply w-4 xl:w-[18px]
              }
            }
          }
        }

        .Bottom {
          @apply border-t border-[#F2F2F2] py-3.5 xl:py-4 px-4 xl:px-5;

          > button {
            @apply text-secondary font-bold text-sm xl:text-base
          }
        }
      }
    }
  }
}
</style>