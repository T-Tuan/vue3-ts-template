<script setup lang="tsx">
import cls from 'classnames';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { LoadingPlugin } from 'tdesign-vue-next';
import type { GlobalConfigProvider } from 'tdesign-vue-next';

const globalConfig: GlobalConfigProvider = {
  table: {
    // empty: 'Empty Data',
    // empty can also be a function
    empty: () => (
      <div class="flex-col mt30">
        <SvgIcon width="142" height="127" name="table-empty" />
        <span class="text-center mt21">暂无数据</span>
      </div>
    ),
    // expandIcon: (h) => h && <ChevronRightIcon />,
    // sortIcon: (h) => h && <CaretDownSmallIcon size="18px" />,

    // More config
    // filterIcon: () => <span>Filter</span>,
    // filterInputPlaceholder: 'Enter Keyword',
    // loadingMoreText: 'Load More',
    // loadingText: 'Loading',
    // sortAscendingOperationText: 'ascending sort',
    // sortCancelOperationText: 'cancel sort',
    // sortDescendingOperationText: 'descending sort',
    treeExpandAndFoldIcon: (h, { type }) => (
      <SvgIcon
        style={{
          transition: '0.3s',
          transform: type === 'expand' ? 'rotate(-90deg)' : '',
        }}
        name="arrow-down-fill"
      />
    ),
  },
};

const route = useRoute();
</script>

<template>
  <main class="h100%">
    <h1>HOME</h1>
  </main>
</template>

<style scoped lang="scss">
#layoutContent {
  position: relative;
  height: 100%;
}

.contentContainer {
  position: relative;
  height: 100%;
  padding: 14px 24px 50px;
  overflow-y: auto;

  .box {
    padding: 24px 24px 30px;
    background-color: white;
  }
}

:deep(.t-layout) {
  overflow: hidden;
}

:deep(.t-layout__header) {
  height: 60px;
}
</style>
