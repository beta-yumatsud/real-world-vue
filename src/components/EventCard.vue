<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetail', params: { id: event.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@ {{ event.time }} on {{  event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <!-- <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>-->
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      require: true
    }
  }
}
</script>


<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card > .title {
  margin: 0;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
