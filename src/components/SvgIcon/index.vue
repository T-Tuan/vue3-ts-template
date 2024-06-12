<template>
  <svg
    ref="svgRef"
    aria-hidden="true"
    class="svg-icon"
    :width="width ?? size"
    :height="height ?? size"
  >
    <use :xlink:href="symbolId" :style="{ color: props.color }" />
  </svg>
</template>

<script setup lang="tsx">
interface IconProps {
  prefix?: string;
  name: string;
  color?: string;
  size?: string;
  width?: string | number;
  height?: string | number;
}

const props = withDefaults(defineProps<IconProps>(), {
  prefix: 'customIcon',
  size: '1em',
});

const svgRef = ref();

const transferUnit = (attr: Extract<keyof IconProps, 'size' | 'width' | 'height'>) => {
  let val = props[attr];

  if (isUndefined(val) || isEmpty(val)) {
    return;
  }

  val = String(val);

  if (/^\d+$/.test(val)) {
    val = `${props[attr]}px`;
  }

  return val;
};

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const width = computed(() => transferUnit('width'));
const height = computed(() => transferUnit('height'));
const size = computed(() => transferUnit('size'));

defineExpose({
  el: svgRef,
});

onMounted(() => {
  // console.log(`svgRef: `, svgRef.value);
});
</script>
