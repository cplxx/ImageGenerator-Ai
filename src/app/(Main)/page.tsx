'use client';

import About from '@/components/ui/about';
import BestSellers from '@/components/ui/best-sellerts';
import Footer from '@/components/ui/footer';
import Future from '@/components/ui/future';
import Hero from '@/components/ui/hero';
import Partners from '@/components/ui/partners';
import PromptCard from '@/components/ui/prompt-card';
import SellersBanner from '@/components/ui/sellers-banner';
import { styles } from '@/lib/styles';
import { Divider, User } from '@nextui-org/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '@/lib/Loader';
import Header from '@/components/ui/Header';

type Props = {};

const Page = (props: Props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/me')
      .then((response) => {
        setUser(response.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <div>
            <Header activeItem={0} />
            <Hero />
          </div>
          <Image
            src={'https://pixner.net/aikeu/assets/images/footer/shape-two.png'}
            width={120}
            height={120}
            alt=""
            className="absolute right-[-30px]"
          />
          <br />
          <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
            <About />
            <div>
              <h1 className={`${styles.heading} m-5`}>Latest Prompts</h1>
              <div className="w-full flex flex-wrap">
                <PromptCard />
                <PromptCard />
                <PromptCard />
                <PromptCard />
              </div>
              <br />
              <BestSellers />
              <Future />
              <Partners />
              <SellersBanner />
              <br />
              <br />
              <Divider className="bg-[#ffffff23]" />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
