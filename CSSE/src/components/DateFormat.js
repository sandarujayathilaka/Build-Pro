import { View, Text } from 'react-native'
import React from 'react'

  export function formatDate(timestamp) {
    const date = new Date(timestamp.toMillis());
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day} `;
  }

