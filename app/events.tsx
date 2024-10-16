import React from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


export default function EventsScreen() {
  return (
    <>
    <ThemedView>
      <ThemedText type="title">Events</ThemedText>
      </ThemedView>
      <ThemedView>
      <ThemedText type="default">
        This is where the events page would be.
      </ThemedText>
    </ThemedView>
    </>
  );
}