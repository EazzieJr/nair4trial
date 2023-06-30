<template>
  <DashboardLayout title="withdrawals">
    <div>
      <div>
        <div class="Stats md:start">
          <div v-for="(stats) in transactionStats" :key="stats.title" class="Stat" :class="stats.status == 'total' ? 'text-secondary' :  stats.status == 'success' ? 'text-[#1faf38] ' : stats.status == 'pending' ? 'text-secondary-text' : 'text-failed'">
            <span class="flex items-center gap-x-[3px] xl:gap-x-[5px]">
              <img :src="require(`/assets/images/${stats.icon}.svg`)" :alt="`${ stats.title } icon`">
              <p class="text-sm">{{ stats.title }}</p>
            </span>

            <span v-if="stats.value <= 1">
              N{{ stats.value }}.00
            </span>

            <span v-else>
              {{ stats.value }}
            </span>

            <p class="text-[#1C3E77]">
              ( 2206 entries )
            </p>
          </div>
        </div>
      </div>

      <div class="Data">
        <div class="Head between">
          <h3>
            All Withdrawals
          </h3>
  
        </div>

        <div class="TableContainer">
          <div class="Table">
            <div class="TableHead">
              <span class="th">
                Username
              </span>
    
              <span class="th">
                <span>
                  Order ID
                </span>
    
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_647_25562)">
                  <path d="M5.96046e-07 0L10 0L5 5L5.96046e-07 0Z" fill="#818183"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_647_25562">
                  <rect width="5" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
    
              <span class="th">
                <span>
                  Amount in NGN
                </span>
    
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_647_25562)">
                  <path d="M5.96046e-07 0L10 0L5 5L5.96046e-07 0Z" fill="#818183"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_647_25562">
                  <rect width="5" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
    
              <span class="th">
                <span>
                  Currency
                </span>
    
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_647_25562)">
                  <path d="M5.96046e-07 0L10 0L5 5L5.96046e-07 0Z" fill="#818183"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_647_25562">
                  <rect width="5" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
              <span class="th">
                <span>
                  Date and Time
                </span>
    
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_647_25562)">
                  <path d="M5.96046e-07 0L10 0L5 5L5.96046e-07 0Z" fill="#818183"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_647_25562">
                  <rect width="5" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
    
              <span class="th">
                <span>
                  Status
                </span>
    
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_647_25562)">
                  <path d="M5.96046e-07 0L10 0L5 5L5.96046e-07 0Z" fill="#818183"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_647_25562">
                  <rect width="5" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
    
              <span class="th">
                <span>
                  Action
                </span>
              </span>
            </div>
    
            <div class="TableData"> 
              <div v-for="(data, index) in tableRows" :key="data.id + index" class="tr text-priText">
                <span class="td">
                  {{ data.name }}
                </span>

                <span class="td">
                  Order {{ data.id }}
                </span>
    
                <span class="td">
                  <img :src="require(`/assets/images/${data.currencyIcon}.png`)" alt="">

                  <span>
                    {{ data.amount }}
                  </span>
                </span>
    
                <span class="td">

                  <span>
                  {{ data.currency }}
                  </span>
                </span>

                <span class="td">
                  {{ data.date }}
                </span>

                <span class="td space-x-1 rounded-full w-fit py-1 pl-2 pr-2.5 border" :class="data.status === 'successfull' ? 'bg-[#E3FEE5] border-[#B1EFC2] text-success' : data.status === 'pending' ? 'bg-[#F7F7F7] border-[#DEE1E5] text-pending' : 'bg-[#FFF5F5] border-[#FFD9D9] text-failed'">
                  <img class="w-3.5" :src="require(`/assets/images/statuses/${data.status}.svg`)" alt="">
                  <span class="text-xs">
                    {{ data.status }}
                  </span>
                </span>

                <button class="td  cursor-pointer  py-[5.5px] px-3.5 w-fit">
                  <img src="~/assets/images/action.svg"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="Pagination between">
          <button class="prev">Previous</button>

          <span>
            Page 1 of 16 ( 2000 entries )
          </span>

          <button class="next">Next</button>
        </div>

      </div>
    </div>
  </DashboardLayout>
</template>

<script>
  export default {
    data() {
      return {
        transactionStats: [
          {
            icon: "card-receive",
            value: "N74,106,003",
            title: "Total Withdrawal",
            status: 'total'
          },
          {
            icon: "money-send",
            value: "N28,000,000",
            title: "Succesful Withdrawals",
            status:'success',
          },
          {
            icon: "money-send",
            value: "N800,725",
            title: "Pending Withdrawals",
            status: 'pending',
          },
          {
            icon: "money-send",
            value: "N3,800,725",
            title: "Failed Withdrawals",
            status: 'failed',
          },
        ],

        tableRows: [
        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "successfull"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          aNaira: "1,202,500",
          date: "16 Mar, 2023 | 2:12pm",
          type: "buy",
          status: "pending"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "failed"
        },
        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "successfull"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          aNaira: "1,202,500",
          date: "16 Mar, 2023 | 2:12pm",
          type: "buy",
          status: "pending"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "failed"
        },
        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "successfull"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          aNaira: "1,202,500",
          date: "16 Mar, 2023 | 2:12pm",
          type: "buy",
          status: "pending"
        },

        {
          name: "james Gibran",
          id: "#1234567",
          currencyIcon: "naira",
          currency: "Naira",
          amount:'30,000',
          date: "16 Mar, 2023 | 2:12pm",
          status: "failed"
        },
      ],
      }
    }
  }
</script>

<style lang="postcss" scoped>
.Stats {
  @apply px-4 md:px-6 xl:px-[30px] mt-5 space-y-5 md:space-y-0 md:space-x-5;

  .Stat {
    @apply rounded-lg bg-[#FAFAFA] p-4 xl:p-5 md:w-[230px] xl:w-[340px];

    > img {
      @apply w-7
    }

    > span {
      @apply my-1.5  text-3xl xl:text-4xl font-black  xl:leading-[48px] tracking-[-0.03em]
    }

    > p {
      @apply text-priText text-xs xl:text-base
    }
  }
}

.Data {
  @apply mx-4 xl:mx-[30px];

  .Head {
    @apply rounded-t-lg border border-[#F3F3F3] px-4 xl:px-5 py-3 xl:py-[18px] mt-5 xl:mt-[30px];

    > h3 {
      @apply text-lg xl:text-2xl font-bold text-secondary-text tracking-[-0.03em]
    }

    > button {
        @apply underline text-[10px] md:text-xs xl:text-sm capitalize text-secondary-text underline-offset-2
    }
  }

  .TableContainer {
    @apply overflow-x-auto w-full;

    .Table {
      @apply rounded-b-lg border border-[#F3F3F3] w-full min-w-[1058px];

      .TableHead {
        @apply bg-[#FAFAFA] py-3 xl:py-3.5 grid grid-cols-[repeat(16,_minmax(0,_1fr))] px-4 xl:px-5;

        .th {
          @apply text-xs xl:text-sm text-priText tracking-[-0.02em] flex justify-start items-center space-x-2 font-medium;

          &:nth-child(2), &:nth-child(3) {
              @apply col-span-3
            }

            &:nth-child(1) {
              @apply col-span-2
            }

             &:nth-child(6) {
              @apply col-span-2 
            }

            &:nth-child(7) {
              @apply col-span-1 
            }

            &:nth-child(5) {
              @apply col-span-3
            }

            &:nth-child(4) {
              @apply col-span-2
            }
         
        }
      }

      .TableData {
        @apply border-t border-[#F3F3F3] divide-y divide-[#F3F3F3];

        .tr {
          @apply py-5 xl:py-[22px] grid grid-cols-[repeat(16,_minmax(0,_1fr))] px-4 xl:px-5;

          .td {
            @apply text-xs xl:text-sm  tracking-[-0.02em] flex justify-start items-center space-x-2.5 capitalize font-medium;

            &:nth-child(2), &:nth-child(3) {
              @apply col-span-3
            }

            &:nth-child(1) {
              @apply col-span-2
            }

             &:nth-child(6) {
              @apply col-span-2 
            }

            &:nth-child(7) {
              @apply col-span-1 
            }

            &:nth-child(5) {
              @apply col-span-3
            }

            &:nth-child(4) {
              @apply col-span-2
            }
          }
        }
      }

    }
  }

  .Pagination {
    @apply rounded-b-lg border border-[#F3F3F3] px-4 xl:px-5 py-3 xl:py-4;

    > button {
      @apply rounded-md border border-priText py-2 xl:py-2.5 px-5 xl:px-8 text-priText text-xs xl:text-sm font-medium tracking-[-0.03em] w-[84px] xl:w-[120px] text-center
    }

    > span {
      @apply text-priText font-bold tracking-[-0.02em]
    }
  }
}
</style>