// 代码生成时间: 2025-09-21 17:55:15
  // 定义一个简单的数学计算器组件
  export let operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  // 计算结果的函数
  function calculate(operation, num1, num2) {
    if (!operations[operation]) {
      throw new Error(`Unsupported operation: ${operation}`);
    }

    return operations[operation](num1, num2);
  }

</script>

<!-- Svelte 的 HTML 模板部分，用于展示 UI -->
<div>
  <h1>Math Calculator</h1>
  <input type="text" bind:value={num1} placeholder="Enter first number" />
  <input type="text" bind:value={num2} placeholder="Enter second number" />
  <select bind:value={selectedOperation}>
    <option value="add">Add</option>
    <option value="subtract">Subtract</option>
    <option value="multiply">Multiply</option>
    <option value="divide">Divide</option>
  </select>
  <button on:click="handleClick">Calculate</button>
  <div>Result: {result}</div>
</div>

<!-- Svelte 的样式部分 -->
<style scoped>
  input, select, button {
    margin: 10px;
  }
  h1 {
    text-align: center;
  }
</style>

<script lang="javascript">
  // 组件的状态
  let num1 = '';
  let num2 = '';
  let selectedOperation = 'add';
  let result = '';

  // 点击按钮时计算结果
  function handleClick() {
    try {
      const result = calculate(selectedOperation, parseFloat(num1), parseFloat(num2));
      this.result = result;
    } catch (error) {
      this.result = 'Error: ' + error.message;
    }
  }
</script>