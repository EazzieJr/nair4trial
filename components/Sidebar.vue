<template>
  <div class="Sidebar">
    <div class="Logo">
      <img src="~/assets/images/dashboard-logo.png" alt="">
    </div>

    <ul class="NavLinks ">
      <li v-for="(link) in navLinks" :key="link">
        <NuxtLink  :to="link.route" class="between" :class="{'active' : link.route.split('/')[2] === getCurrentPage  || link.subRoute?.route === getSubRoutePage}">
          <div class="flex items-center space-x-2"> 
            <img :src="require(`/assets/images/${ link.icon }.svg`)" :alt="link.name" class="w-5" />
          
            <span class="">
              {{link.name}}
            </span>
          </div>

          <div v-if="link.subRoute" >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0669 1.91666L7.46693 7.53333C7.40026 7.6 7.32804 7.64733 7.25026 7.67533C7.17248 7.70333 7.08915 7.71711 7.00026 7.71666C6.91137 7.71666 6.82804 7.70289 6.75026 7.67533C6.67248 7.64778 6.60026 7.60044 6.53359 7.53333L0.916927 1.91666C0.761371 1.76111 0.683594 1.56666 0.683594 1.33333C0.683594 1.1 0.766927 0.899998 0.933594 0.733332C1.10026 0.566665 1.2947 0.483332 1.51693 0.483332C1.73915 0.483332 1.93359 0.566665 2.10026 0.733332L7.00026 5.63333L11.9003 0.733332C12.0558 0.577776 12.2476 0.499998 12.4756 0.499998C12.7036 0.499998 12.9007 0.583331 13.0669 0.749998C13.2336 0.916665 13.3169 1.11111 13.3169 1.33333C13.3169 1.55555 13.2336 1.75 13.0669 1.91666Z" fill="#6C7D98" fill-opacity="0.8"/>
            </svg>
          </div>
        </NuxtLink>

        <div v-if="link.subRoute" class="SubRoutes">
          <div v-for="data in link.subRoute" :key="data.name" class="route " :class="getSubRoutePage.includes(data.route) ? 'activeRoute' : '' ">
            <NuxtLink :to="data.route">
              <span class="">
                {{ data.name }}
              </span>
            </NuxtLink>
          </div>
        </div>

      </li>
    </ul>

    <div class="Logout" @click="LogOut = true">
      <button class="start space-x-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41699 6.3002C7.67533 3.3002 9.21699 2.0752 12.592 2.0752H12.7003C16.4253 2.0752 17.917 3.56686 17.917 7.29186V12.7252C17.917 16.4502 16.4253 17.9419 12.7003 17.9419H12.592C9.24199 17.9419 7.70033 16.7335 7.42533 13.7835" stroke="#6C7D98" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.4999 10H3.0166" stroke="#6C7D98" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.87467 7.20898L2.08301 10.0007L4.87467 12.7923" stroke="#6C7D98" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <span>
          Log Out
        </span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        LogOut: false,
        navLinks: [
          {
            name: "Dashboard",
            icon: "d-dash",
            route: "/"
          },
          {
            name: "Withdrawals",
            icon: "d-withdrawals",
            route: "/withdrawals/"
          },
          {
            name: "GiftCards",
            icon: "d-giftcard",
            route: "/giftcards/transactions",
            isSubRouteTabOpen: false,
            subRoute: [
              {
                name: 'GiftCard Transactions',
                route:'/giftcards/transactions'
              },
              {
                name: 'GiftCard Categories Management',
                route:'/giftcards/categories-management'
              },
              {
                name: 'GiftCard Product Management',
                route:'/giftcards/product-management'
              }
            ]
          },
          {
            name: "E-Currency",
            icon: "d-currency",
            route: "/e-currency/",
            isSubRouteActive: false,
            subRoute: [
              {
                name: 'E-Currency Transactions',
                route:'/e-currency/transactions'
              },
              {
                name: 'E-Currency Network Management',
                route:'/e-currency/network-management'
              },
              {
                name: 'E-Currency Asset Management',
                route:'/e-currency/asset-management'
              }
            ]
          },
          {
            name: "User Management",
            icon: "d-user-mgt",
            route: "/user-management/"
          },
          {
            name: "Admin Management",
            icon: "d-admin-mgt",
            route: "/admin-management/"
          },
          {
            name: "Role Management",
            icon: "d-role-mgt",
            route: "/role-management/"
          },
          {
            name: "Notification Management",
            icon: "d-settings",
            route: "/settings/"
          },
          {
            name: "Configuration",
            icon: "d-config",
            route: "/configuration/"
          },
        ]
      }
    },

    computed: {
      getCurrentPage() {
        console.log( this.$route.fullPath )
        return this.$route.fullPath.split('/')[2]
      },

      getSubRoutePage() {
        return this.$route.fullPath
      }
    },

    
  }
</script>

<style lang="postcss" scoped>
.Sidebar {
  @apply hidden lg:block fixed overflow-scroll left-0 top-0 bottom-0 border-r border-[#EEEEEE];

  .Logo {
    @apply w-fit pt-7 xl:pt-[30px] pl-5 xl:pl-6 pr-[39px] xl:pr-[100px] pb-7 border-[#EEEEEE];

    > img {
      @apply w-48 xl:w-[185px]
    }
  }

  .NavLinks {
    @apply space-y-4 pb-[90px] xl:pb-[109px] text-sm  font-medium text-[#8996AC];

    > li {
      span {
        @apply font-medium font-satoshi
      }
      
      > a {
        @apply py-3 px-5 xl:px-6 space-x-2.5 text-sm  font-medium text-[#8996AC] relative;
        &.active {
          @apply bg-[#ECF4F9] text-secondary font-bold;

          > img {
            filter: sepia(100%) hue-rotate(190deg) saturate(500%) !important;
          }

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: #2F99D4;
          }
        }
      }
    }

    .SubRoutes{
      @apply border-l-2 ml-7 xl:ml-8 border-opacity-80 border-priText space-y-4 xl:space-y-5 my-[15px];

      .route{
        @apply pl-[19px];
      }

      .activeRoute {
        @apply text-secondary font-bold;
      }

    }
  }

  .Logout {
    @apply mx-5 xl:mx-6 mt-4 mb-7 xl:mb-9 border-t border-[#EEEEEE];

    > button {
      @apply mt-4 py-3 text-sm font-satoshi font-medium text-[#8996AC] w-full
    }
  }
}
</style>