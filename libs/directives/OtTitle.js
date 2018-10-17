export default function(el, binding) {
    el.title = binding.value || el.innerText;
}
