<script>
  import "../app.pcss";
  import { afterNavigate } from "$app/navigation";

  afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  });

</script>

<main id="content">
    <slot></slot>
</main>

