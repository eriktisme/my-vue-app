<template>
  <div class="w-full max-w-lg px-3 md:px-0 m-auto">
    <Card>
      <CardSection>
        <form @submit.prevent="login">
          <Group>
            <Label>Email</Label>
            <InputField :value="email" type="email"/>
          </Group>
          <Group>
            <Label>Password</Label>
            <InputField :value="password" type="password"/>
          </Group>
          <Button
              :busy="loading"
              block="true"
              rounded="true"
              type="submit"
          >
            Sign in
          </Button>
        </form>
      </CardSection>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card, CardSection } from "@scaling-ui/card";
import { Button, Group, Label, InputField } from "@scaling-ui/form";
import { defineComponent, reactive, toRefs } from "vue";
import { useApi } from "@scaling/api";

interface LoginPayload {
  email: string;
  password: string;
}

export default defineComponent({
  components: {
    Button,
    Card,
    CardSection,
    Group,
    InputField,
    Label
  },

  setup() {
    const { loading, post } = useApi("login")

    const payload = reactive<LoginPayload>({
      email: '',
      password: '',
    })

    const login = () => {
      console.log('submitted form')

      post(payload)
    }

    return {
      loading,
      login,
      ...toRefs(payload),
    }
  }
})
</script>
