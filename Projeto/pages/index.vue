<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-2xl">Transações</h1>

      <AppButton @click="toggleAddTransactionModal(!isAddTransactionModalOpen)">
        Nova transação
      </AppButton>
    </div>

    <TransactionAdd
      v-if="isAddTransactionModalOpen"
      @cancel="toggleAddTransactionModal(false)"
      @onAddTransactionAfter="onAddTransactionAfter"
    />

    <TransactionFilter @filter="onFilter" />
    <div class="mt-4">
      <div class="space-y-8">
        <div v-for="(group, index) in groupedTransactions" :key="index">
          <div class="mb-1">
            <div class="font-bold text-sm">{{ formatDate(index) }}</div>
          </div>

          <div class="space-y-3">
            <Transaction
              v-for="transaction in group"
              :key="transaction.id"
              :transaction="transaction"
              @update="onUpdateTransaction"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/Ui/AppButton";

import TransactionAdd from "~/components/Transactions/TransactionAdd";
import Transaction from "~/components/Transactions/Transaction";
import TransactionFilter from "~/components/Transactions/TransactionFilter";

import { groupBy, orderBy } from "lodash";

export default {
  name: "IndexPage",

  components: {
    AppButton,
    Transaction,
    TransactionAdd,
    TransactionFilter,
  },

  data() {
    return {
      isAddTransactionModalOpen: false,
    };
  },

  async asyncData({ store }) {
    return {
      transactions: await store.dispatch("transactions/getTransactions"),
    };
  },

  computed: {
    groupedTransactions() {
      const ord = orderBy(this.transactions, "date", "desc");
      const group = groupBy(ord, "date");
      return group;
    },
  },

  methods: {
    formatDate(date) {
      const dateFormated = this.$dayjs(date).format("DD/MM/YYYY");
      return dateFormated;
    },
    onAddTransactionAfter(transaction) {
      this.transactions.push(transaction);
    },
    toggleAddTransactionModal(state) {
      this.isAddTransactionModalOpen = state;
    },
    onUpdateTransaction(transaction) {
      const index = this.transactions.findIndex((t) => t.id === transaction.id);
      this.transactions.splice(index, 1, transaction);
    },
    onFilter(filter) {
      this.$store
        .dispatch("transactions/getTransactions", filter)
        .then((response) => {
          this.transactions = response;
        });
    },
  },
};
</script>
