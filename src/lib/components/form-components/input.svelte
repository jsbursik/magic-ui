<script lang="ts">
  let {
    type,
    id,
    name = id,
    placeholder = undefined,
    disabled = false,
    required = false,
    value = $bindable(""),
    valid = $bindable(false),
    validator = () => {
      return true;
    },
    ...props
  } = $props();

  let touched = $state(false);

  // Validator is a function the user can pass in that returns true or false based on the value of the field
  // Say you wanted it to validate that the value followed a regex pattern.
  // You could do this:
  // validator = (value) => {
  //   const reg = /\$test/;
  //   return reg.test(value);
  // }
  // Because the input requires touched to be true, this will only happen when the user inputs something.

  $effect(() => {
    valid = validator(value);
  });
</script>

<input
  {type}
  {name}
  {id}
  {placeholder}
  {required}
  {disabled}
  {...props}
  {value}
  class:invalid={touched && !valid}
  onblur={() => (touched = true)}
  oninput={(e) => {
    value = e.currentTarget.value;
    valid = e.currentTarget.checkValidity();
  }}
/>
