import { CardDemo } from "@/components/CardDemo";
import Header from "@/components/Header";
import {Button} from "@/components/ui/button"
import { useEffect, useState } from "react";
// import { useClient } from 'next/data-client';

export default function Home() {
  // const apiKey = "a510b4df2afcfd16de1622e732af7987";
  return (
  <>
    <div>
      <Header />
    </div>
    <div>
      <CardDemo />
    </div>
  </>
  )
}
