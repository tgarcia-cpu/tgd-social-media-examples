// Set this to your public contact address to enable Contact in the sidebar.
const contactEmail = '';
const projects = [
  { name: 'Big Easy', file: 'big-easy', folder: 'Campaigns', alt: 'Green and gold jazz poster on a stone wall' },
  { name: 'LuxRx', file: 'luxrx', folder: 'Identity', alt: 'LuxRx wordmark on a cream background' },
  { name: 'New Yor Partners', file: 'new-yor', folder: 'Wayfinding', alt: 'New Yor Partners directional sign' },
  { name: 'Delta Clinical Research', file: 'delta', folder: 'Identity', alt: 'Delta Clinical Research identity concept' }
];

const clientFolders = ['BCP', 'Celly Health', 'Kyzatrex', 'Levo Health', 'ND', 'Peaches', 'Riverside Recovery', 'Roxus', 'The Eye Associates', 'WellSync', 'Wellya'];
// Add client artwork here using the same name, file, and alt fields as projects.
const clientArtwork = {
  "BCP": [
    {
      "name": "1-square",
      "file": "work/bcp/01xl57ai2heqhm3ylobnhj7zjrlz72j2fv",
      "folder": "BCP",
      "alt": "BCP — 1-square"
    },
    {
      "name": "1-vertical",
      "file": "work/bcp/01xl57ai5bdvpglsz6z5bkesv7adl5i3mi",
      "folder": "BCP",
      "alt": "BCP — 1-vertical"
    },
    {
      "name": "2-square",
      "file": "work/bcp/01xl57aiz7gorpyj4jlngzeldpnis3eatn",
      "folder": "BCP",
      "alt": "BCP — 2-square"
    },
    {
      "name": "2-square-1",
      "file": "work/bcp/01xl57ai6bm3mkebnmxnhjn5pb4mdljlnp",
      "folder": "BCP",
      "alt": "BCP — 2-square-1"
    },
    {
      "name": "2-square-2",
      "file": "work/bcp/01xl57ai3zr3kz73r5pvfz5uivetiebyb4",
      "folder": "BCP",
      "alt": "BCP — 2-square-2"
    },
    {
      "name": "2-square-3",
      "file": "work/bcp/01xl57ai5zdt2ybe7vrjflflwa6cz6c7zk",
      "folder": "BCP",
      "alt": "BCP — 2-square-3"
    },
    {
      "name": "2-square-4",
      "file": "work/bcp/01xl57ai42xnfxocdtrjfic2x6m3z2x23q",
      "folder": "BCP",
      "alt": "BCP — 2-square-4"
    },
    {
      "name": "2-vertical",
      "file": "work/bcp/01xl57ai6uk4ufnw626vgkf4gclpy4i6ya",
      "folder": "BCP",
      "alt": "BCP — 2-vertical"
    },
    {
      "name": "2-vertical-1",
      "file": "work/bcp/01xl57ai7sgsdwniq7nffjvrnzpkh3exap",
      "folder": "BCP",
      "alt": "BCP — 2-vertical-1"
    },
    {
      "name": "2-vertical-2",
      "file": "work/bcp/01xl57ai3wdawmbesmtjezkmodadk3sarg",
      "folder": "BCP",
      "alt": "BCP — 2-vertical-2"
    },
    {
      "name": "Carousel Square",
      "file": "work/bcp/01xl57ai4fktdcvw4c7jakuc5kzee37bpm",
      "folder": "BCP",
      "alt": "BCP — Carousel Square"
    },
    {
      "name": "Vertical Square",
      "file": "work/bcp/01xl57ai5h7kg3x5sferfzmjpla46mu7rd",
      "folder": "BCP",
      "alt": "BCP — Vertical Square"
    }
  ],
  "Celly Health": [
    {
      "name": "Educational_ What they treat-01",
      "file": "work/celly-health/01xl57ai63ojddgpcvzbflmqoc6kgx77dp",
      "folder": "Celly Health",
      "alt": "Celly Health — Educational_ What they treat-01"
    },
    {
      "name": "Educational_ What they treat-02",
      "file": "work/celly-health/01xl57aiykvnqelgdl3zbk4gcinyhp57nh",
      "folder": "Celly Health",
      "alt": "Celly Health — Educational_ What they treat-02"
    },
    {
      "name": "Educational_ What they treat-03",
      "file": "work/celly-health/01xl57ai2kpjrak2lmirhiflgynqgypmyv",
      "folder": "Celly Health",
      "alt": "Celly Health — Educational_ What they treat-03"
    },
    {
      "name": "Educational_ What they treat-04",
      "file": "work/celly-health/01xl57ai7cd4zkirbcdjglv34ggglnhjf7",
      "folder": "Celly Health",
      "alt": "Celly Health — Educational_ What they treat-04"
    },
    {
      "name": "Educational_ What they treat-05",
      "file": "work/celly-health/01xl57ai72lju3bzpnxvdlz65xdddjmbgk",
      "folder": "Celly Health",
      "alt": "Celly Health — Educational_ What they treat-05"
    },
    {
      "name": "Health and Wellness Tips-01",
      "file": "work/celly-health/01xl57aiyve4n56mgztzfzzqzyy7xkuifo",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-01"
    },
    {
      "name": "Health and Wellness Tips-02",
      "file": "work/celly-health/01xl57aizv7gut73lue5azmvxmbtjkm3eh",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-02"
    },
    {
      "name": "Health and Wellness Tips-03",
      "file": "work/celly-health/01xl57ai5kcnpm2tnigrblpuxr6jceglgf",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-03"
    },
    {
      "name": "Health and Wellness Tips-04",
      "file": "work/celly-health/01xl57ai3mmkp2stfryndz5qmbyes77r6f",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-04"
    },
    {
      "name": "Health and Wellness Tips-05",
      "file": "work/celly-health/01xl57ai5eio5pwklgzbc36h4cngfx7vpd",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-05"
    },
    {
      "name": "Health and Wellness Tips-06",
      "file": "work/celly-health/01xl57ai77hz3szc3cjbakptzeywumawpd",
      "folder": "Celly Health",
      "alt": "Celly Health — Health and Wellness Tips-06"
    },
    {
      "name": "Highlighting Different Services-01",
      "file": "work/celly-health/01xl57aizv6oxlc4xujne2ba2b7qycpjmm",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-01"
    },
    {
      "name": "Highlighting Different Services-02",
      "file": "work/celly-health/01xl57ai26tehbsn2wunb2gasl746t7jvh",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-02"
    },
    {
      "name": "Highlighting Different Services-03",
      "file": "work/celly-health/01xl57ai2jey7jb7nfv5b3vkazjbvwm5bj",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-03"
    },
    {
      "name": "Highlighting Different Services-04",
      "file": "work/celly-health/01xl57ai5oxu6bffwcwrbikv3ulxfi74ik",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-04"
    },
    {
      "name": "Highlighting Different Services-05",
      "file": "work/celly-health/01xl57ai4gigc32z6lafai7mtdfmx4tz6s",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-05"
    },
    {
      "name": "Highlighting Different Services-06",
      "file": "work/celly-health/01xl57ai4z4viqnngbofblrf7hpmbq77hq",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-06"
    },
    {
      "name": "Highlighting Different Services-07",
      "file": "work/celly-health/01xl57ai4qtri4z22tdve2qr44pldvvj2c",
      "folder": "Celly Health",
      "alt": "Celly Health — Highlighting Different Services-07"
    }
  ],
  "Levo Health": [
    {
      "name": "1080x1080",
      "file": "work/levo-health/01xl57ai6p3dpjbkbwjngjy5lqaowr55bm",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080"
    },
    {
      "name": "1080x1080-1",
      "file": "work/levo-health/01xl57ai7afgovbaumfzczhlhhoydvuerx",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-1"
    },
    {
      "name": "1080x1080-2",
      "file": "work/levo-health/01xl57ai65ieoenrvyybhyxoirlhcfprtv",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-2"
    },
    {
      "name": "1080x1080-3",
      "file": "work/levo-health/01xl57ai2lke5nd4x7bfbkv7aibiv3viby",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-3"
    },
    {
      "name": "1080x1080-4",
      "file": "work/levo-health/01xl57ai3yrrs3pgc6dvf2gkokn725uvd3",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-4"
    },
    {
      "name": "1080x1080-5",
      "file": "work/levo-health/01xl57aiz2yumv7k7lwbgza3nrkeqi7b6s",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-5"
    },
    {
      "name": "1080x1080-6",
      "file": "work/levo-health/01xl57ai72wfbcla6ftvcjq2mbsyks5ei5",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-6"
    },
    {
      "name": "1080x1080-7",
      "file": "work/levo-health/01xl57ai3d5qzihs6ykjekgjm67yezj76r",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-7"
    },
    {
      "name": "1080x1080-8",
      "file": "work/levo-health/01xl57ai7dyivaspedrzgjuyfng3rsilns",
      "folder": "Levo Health",
      "alt": "Levo Health — 1080x1080-8"
    },
    {
      "name": "Group 26954",
      "file": "work/levo-health/01xl57ai4wuc6tot3g4fey2zvvtfsjkc5o",
      "folder": "Levo Health",
      "alt": "Levo Health — Group 26954"
    }
  ],
  "ND": [
    {
      "name": "1-square",
      "file": "work/nd/01xl57ai6rnsysz4wyy5cky73b3bw7erld",
      "folder": "ND",
      "alt": "ND — 1-square"
    },
    {
      "name": "1-vertical",
      "file": "work/nd/01xl57ai4ug6xiejy54bbkhll3cwxoma45",
      "folder": "ND",
      "alt": "ND — 1-vertical"
    },
    {
      "name": "2-square",
      "file": "work/nd/01xl57aizjiudilhwejfbk4egpudqzliy3",
      "folder": "ND",
      "alt": "ND — 2-square"
    },
    {
      "name": "2-square-1",
      "file": "work/nd/01xl57ai77qm7jcsjhffhiajytugz6k73d",
      "folder": "ND",
      "alt": "ND — 2-square-1"
    },
    {
      "name": "2-square-2",
      "file": "work/nd/01xl57ai2adf3ih35hercylk4ccj6io7iw",
      "folder": "ND",
      "alt": "ND — 2-square-2"
    },
    {
      "name": "2-vertical",
      "file": "work/nd/01xl57ai4bt6lglsfrmvgiriewnrwgtuaw",
      "folder": "ND",
      "alt": "ND — 2-vertical"
    },
    {
      "name": "2-vertical-1",
      "file": "work/nd/01xl57ai7yrk4swvw4wrbijd3stkg7cngl",
      "folder": "ND",
      "alt": "ND — 2-vertical-1"
    },
    {
      "name": "2-vertical-2",
      "file": "work/nd/01xl57aiys5xqzfet2gbbzw737n4ixocke",
      "folder": "ND",
      "alt": "ND — 2-vertical-2"
    },
    {
      "name": "3-square",
      "file": "work/nd/01xl57ai2b3auzniplojclhw2kvhuucqz6",
      "folder": "ND",
      "alt": "ND — 3-square"
    },
    {
      "name": "3-vertical",
      "file": "work/nd/01xl57aiydcpl2jqykszfyyadjhymy7rfe",
      "folder": "ND",
      "alt": "ND — 3-vertical"
    },
    {
      "name": "4-square",
      "file": "work/nd/01xl57ai2n5m5rtosuabc36jyuhsr77ch5",
      "folder": "ND",
      "alt": "ND — 4-square"
    },
    {
      "name": "4-vertical",
      "file": "work/nd/01xl57ai5pxrpf5ouxyrblyxxibc4f3aai",
      "folder": "ND",
      "alt": "ND — 4-vertical"
    }
  ],
  "Peaches": [
    {
      "name": "Nutrition-Template 1",
      "file": "work/peaches/01xl57aizosbljuxrmenb2pvmzqvstvloy",
      "folder": "Peaches",
      "alt": "Peaches — Nutrition-Template 1"
    },
    {
      "name": "Nutrition-Template 2 A",
      "file": "work/peaches/01xl57aiycndhv24xk3bbztijoyn2fzbjm",
      "folder": "Peaches",
      "alt": "Peaches — Nutrition-Template 2 A"
    },
    {
      "name": "Nutrition-Template 2 B",
      "file": "work/peaches/01xl57ai5l6z7xzaokefajmiz4nbd2nt6n",
      "folder": "Peaches",
      "alt": "Peaches — Nutrition-Template 2 B"
    },
    {
      "name": "Nutrition-Template 3",
      "file": "work/peaches/01xl57aiygdnrubf5bhfgzkv6weoaqkuz2",
      "folder": "Peaches",
      "alt": "Peaches — Nutrition-Template 3"
    },
    {
      "name": "lifestyleTemplate 4",
      "file": "work/peaches/01xl57aizjpunc2wb2rzdkhpqcnbdifqnx",
      "folder": "Wellness",
      "alt": "Peaches — lifestyleTemplate 4"
    },
    {
      "name": "lifestyleTemplate 5 A",
      "file": "work/peaches/01xl57ai76unblsnn5tzd3cvydok4slgaj",
      "folder": "Wellness",
      "alt": "Peaches — lifestyleTemplate 5 A"
    },
    {
      "name": "lifestyleTemplate 5 B",
      "file": "work/peaches/01xl57ai2m4mxzge6wdjhi5j3fsv6lijw5",
      "folder": "Wellness",
      "alt": "Peaches — lifestyleTemplate 5 B"
    },
    {
      "name": "lifestyleTemplate 6",
      "file": "work/peaches/01xl57aizexuly6d7ogrgigqnxx4drh2iu",
      "folder": "Wellness",
      "alt": "Peaches — lifestyleTemplate 6"
    },
    {
      "name": "lifestyleTemplate 9",
      "file": "work/peaches/01xl57ai5aouoyudcwdnf2ba3bbrzzv6ij",
      "folder": "Wellness",
      "alt": "Peaches — lifestyleTemplate 9"
    }
  ],
  "Riverside Recovery": [
    {
      "name": "RR _ Amenities",
      "file": "work/riverside-recovery/01xl57ai27skvp73gd3nciiukuczscaoxh",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Amenities"
    },
    {
      "name": "RR _ Amenities-1",
      "file": "work/riverside-recovery/01xl57ai3zvfn4appysnekjqat2vfgftc3",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Amenities-1"
    },
    {
      "name": "RR _ Amenity Layout",
      "file": "work/riverside-recovery/01xl57ai7rzl7ghhjwobgjpjy4hgmrt3pz",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Amenity Layout"
    },
    {
      "name": "RR _ Conferences",
      "file": "work/riverside-recovery/01xl57ai3rs47gnjkl4nf2llhnollqgkie",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Conferences"
    },
    {
      "name": "RR _ Education Layout",
      "file": "work/riverside-recovery/01xl57ai4gjoje5nsfq5a233llc76hfthi",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Education Layout"
    },
    {
      "name": "RR _ Events",
      "file": "work/riverside-recovery/01xl57aiyfivl7jujzbrel5psoui5qzxee",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Events"
    },
    {
      "name": "RR _ FAQ Layout",
      "file": "work/riverside-recovery/01xl57aiyremrc6vwglnfjc5xosovnfihf",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ Layout"
    },
    {
      "name": "RR _ FAQ",
      "file": "work/riverside-recovery/01xl57ai743pt34hpusfbypxdpfca2tudh",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ"
    },
    {
      "name": "RR _ FAQ-1",
      "file": "work/riverside-recovery/01xl57ai4ya7bx4f5f3bbjsdcr2ykwgfot",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-1"
    },
    {
      "name": "RR _ FAQ-2",
      "file": "work/riverside-recovery/01xl57aizvbaeyt7ytobb2f4d3p4w6trct",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-2"
    },
    {
      "name": "RR _ FAQ-3",
      "file": "work/riverside-recovery/01xl57ai5rco2u6jeazbeyvvixw3k6hfn7",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-3"
    },
    {
      "name": "RR _ FAQ-4",
      "file": "work/riverside-recovery/01xl57aizlvimu5ynsrjb2x3fobmrkuics",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-4"
    },
    {
      "name": "RR _ FAQ-5",
      "file": "work/riverside-recovery/01xl57ai4h7ymjcks5nzfzeskqhx5hg72h",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-5"
    },
    {
      "name": "RR _ FAQ-6",
      "file": "work/riverside-recovery/01xl57ai5kud7we42cwfe2iuacrjxcyisu",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-6"
    },
    {
      "name": "RR _ FAQ-6-1",
      "file": "work/riverside-recovery/01xl57ai7nj373tr2xbjhi3qq6c2v2xe5y",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ FAQ-6-1"
    },
    {
      "name": "RR _ Get Help",
      "file": "work/riverside-recovery/01xl57ai3cjqghb2oiwrgks3he4s3hyvjm",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Get Help"
    },
    {
      "name": "RR _ Get Help-1",
      "file": "work/riverside-recovery/01xl57ai7ubojjcer5arc2wkceph6dpwcf",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Get Help-1"
    },
    {
      "name": "RR _ Get Help-2",
      "file": "work/riverside-recovery/01xl57ai7p3rdqwzz4e5alsfivmk6b2myr",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Get Help-2"
    },
    {
      "name": "RR _ Meet the Team 1",
      "file": "work/riverside-recovery/01xl57aiy4fw5dvhpep5dyyto543qfuwz4",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 1"
    },
    {
      "name": "RR _ Meet the Team 10",
      "file": "work/riverside-recovery/01xl57ai7bopbxgla3n5ektru3xj4vl6u4",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 10"
    },
    {
      "name": "RR _ Meet the Team 11",
      "file": "work/riverside-recovery/01xl57ai6c3ero6yjgfjg3wdoqxnngvisf",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 11"
    },
    {
      "name": "RR _ Meet the Team 12",
      "file": "work/riverside-recovery/01xl57ai3tinzy3vhtrjgj22qh2twg2j42",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 12"
    },
    {
      "name": "RR _ Meet the Team 13",
      "file": "work/riverside-recovery/01xl57ai5bd6enbdjgvvcyalffalhlzo2s",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 13"
    },
    {
      "name": "RR _ Meet the Team 14",
      "file": "work/riverside-recovery/01xl57aiyhcy4gvtkqorbzzjpsqmcihyc2",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 14"
    },
    {
      "name": "RR _ Meet the Team 15",
      "file": "work/riverside-recovery/01xl57ai2xsf2zsul4nfgiueca7mjtr3wc",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 15"
    },
    {
      "name": "RR _ Meet the Team 17",
      "file": "work/riverside-recovery/01xl57aiy6iqxhmietgngyvpvfjwfkmtbq",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 17"
    },
    {
      "name": "RR _ Meet the Team 18",
      "file": "work/riverside-recovery/01xl57ai4oyhy5eajx6nclw6zmmfrgyq7x",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 18"
    },
    {
      "name": "RR _ Meet the Team 2",
      "file": "work/riverside-recovery/01xl57ai7j5m4ll4qyqzazzj577oi7rg4a",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 2"
    },
    {
      "name": "RR _ Meet the Team 3",
      "file": "work/riverside-recovery/01xl57ai5fyr6fglihurh2mzpx7r7d5mj4",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 3"
    },
    {
      "name": "RR _ Meet the Team 5",
      "file": "work/riverside-recovery/01xl57aizzk57lc7xslrg2uovwixn6uxch",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 5"
    },
    {
      "name": "RR _ Meet the Team 6",
      "file": "work/riverside-recovery/01xl57aizspnfgpxlju5gz6jivswwvwntr",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 6"
    },
    {
      "name": "RR _ Meet the Team 7",
      "file": "work/riverside-recovery/01xl57aiyfpftuxn3f2bciupy7unv5ezy4",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 7"
    },
    {
      "name": "RR _ Meet the Team 9",
      "file": "work/riverside-recovery/01xl57ai5hihx7qrdn2vekksnvhupc7que",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team 9"
    },
    {
      "name": "RR _ Meet the Team Layout A",
      "file": "work/riverside-recovery/01xl57ai63pecbie36cnd24vudridmwj4y",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team Layout A"
    },
    {
      "name": "RR _ Meet the Team Layout B",
      "file": "work/riverside-recovery/01xl57ai6x55zmmptkq5elfiwtye7oegpf",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team Layout B"
    },
    {
      "name": "RR _ Meet the Team Layout C",
      "file": "work/riverside-recovery/01xl57ai7farv6z72f5zhyd2cz2sglqdug",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Meet the Team Layout C"
    },
    {
      "name": "RR _ Milestones 1",
      "file": "work/riverside-recovery/01xl57ai6szyn265obyjdjsnxuinorvd2w",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 1"
    },
    {
      "name": "RR _ Milestones 2",
      "file": "work/riverside-recovery/01xl57ai2ao4ibgtcoh5bkzjobr7akhadr",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 2"
    },
    {
      "name": "RR _ Milestones 3",
      "file": "work/riverside-recovery/01xl57ai4prxsq3renqfdl6qdeh3drszgo",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 3"
    },
    {
      "name": "RR _ Milestones 4",
      "file": "work/riverside-recovery/01xl57ai3uzu3trfvkzrg37ufs45rhch37",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 4"
    },
    {
      "name": "RR _ Milestones 5",
      "file": "work/riverside-recovery/01xl57ai2i2pgcafmftvgl6qa255iqmgie",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 5"
    },
    {
      "name": "RR _ Milestones 6",
      "file": "work/riverside-recovery/01xl57ai27kezk45p54zbl5nxetidlc5j6",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones 6"
    },
    {
      "name": "RR _ Milestones",
      "file": "work/riverside-recovery/01xl57ai27vqgpxfldq5c2koomzdbl5g6y",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Milestones"
    },
    {
      "name": "RR _ Myth Layout",
      "file": "work/riverside-recovery/01xl57ai27uramlqsvtvhz5owi2yjdzyfh",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Myth Layout"
    },
    {
      "name": "RR _ Some key signs include_",
      "file": "work/riverside-recovery/01xl57aiy6gnzcds2hprajaqpa2uqnn5dn",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Some key signs include_"
    },
    {
      "name": "RR _ Testimonials",
      "file": "work/riverside-recovery/01xl57ai5smzen3cirhjdi64xqjogxtteb",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Testimonials"
    },
    {
      "name": "RR _ Treatment Program Layout",
      "file": "work/riverside-recovery/01xl57ai6yhkuk2m6np5eiwy5voci66aaf",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Treatment Program Layout"
    },
    {
      "name": "RR _ Who We Are",
      "file": "work/riverside-recovery/01xl57ai4hktaaivi2ljfyta4abk3yc5ux",
      "folder": "Riverside Recovery",
      "alt": "Riverside Recovery — RR _ Who We Are"
    }
  ],
  "Roxus": [
    {
      "name": "Carousel 1",
      "file": "work/roxus/01xl57ai6vzt6ufvgev5dzmalzoaidlt5x",
      "folder": "Roxus",
      "alt": "Roxus — Carousel 1"
    },
    {
      "name": "Carousel 2",
      "file": "work/roxus/01xl57aiyvhfb7eatwk5c33nveeosk7slh",
      "folder": "Roxus",
      "alt": "Roxus — Carousel 2"
    },
    {
      "name": "Carousel 3",
      "file": "work/roxus/01xl57aiyjj5fhi7kqkfhz75njbsh4tpy3",
      "folder": "Roxus",
      "alt": "Roxus — Carousel 3"
    },
    {
      "name": "Carousel 4",
      "file": "work/roxus/01xl57ai76drewy34zw5dz3evs5kev2qcd",
      "folder": "Roxus",
      "alt": "Roxus — Carousel 4"
    },
    {
      "name": "Carousel 5",
      "file": "work/roxus/01xl57ai4or2pyingu2bhlyql3akkg6kb7",
      "folder": "Roxus",
      "alt": "Roxus — Carousel 5"
    },
    {
      "name": "Post 01",
      "file": "work/roxus/01xl57ai6tap4rdtpwijfif5pysoxplmz7",
      "folder": "Roxus",
      "alt": "Roxus — Post 01"
    },
    {
      "name": "Post 02",
      "file": "work/roxus/01xl57ai4dzz5lbtsx7nclbby2cnrvr7w2",
      "folder": "Roxus",
      "alt": "Roxus — Post 02"
    },
    {
      "name": "Post 03",
      "file": "work/roxus/01xl57ai775aahit5d4nhliimqpyzazsiu",
      "folder": "Roxus",
      "alt": "Roxus — Post 03"
    },
    {
      "name": "Post 04",
      "file": "work/roxus/01xl57ai6zlfwjf7tqprgiweheokmovgjc",
      "folder": "Roxus",
      "alt": "Roxus — Post 04"
    },
    {
      "name": "Post 05",
      "file": "work/roxus/01xl57ai7nnmbmpjcohjej4bz7xcp7myjg",
      "folder": "Roxus",
      "alt": "Roxus — Post 05"
    },
    {
      "name": "Post 06",
      "file": "work/roxus/01xl57ai2e46kqgif3mnaz4d4q2huoc3if",
      "folder": "Roxus",
      "alt": "Roxus — Post 06"
    },
    {
      "name": "Post 07",
      "file": "work/roxus/01xl57ai5vyvffixsbcna2him6v3hkkhr4",
      "folder": "Roxus",
      "alt": "Roxus — Post 07"
    },
    {
      "name": "Post 08",
      "file": "work/roxus/01xl57aiyszcdrk4zul5gkbo3dmw5d22vy",
      "folder": "Roxus",
      "alt": "Roxus — Post 08"
    },
    {
      "name": "Post 09",
      "file": "work/roxus/01xl57aizcohypxvmclzdknfdyq6gkbjbe",
      "folder": "Roxus",
      "alt": "Roxus — Post 09"
    },
    {
      "name": "Post 10",
      "file": "work/roxus/01xl57ai76352girqywnbyw4ybptrbl6cq",
      "folder": "Roxus",
      "alt": "Roxus — Post 10"
    },
    {
      "name": "Post 11",
      "file": "work/roxus/01xl57ai4u3m2a3t7ixffz4llz6shzcl4m",
      "folder": "Roxus",
      "alt": "Roxus — Post 11"
    },
    {
      "name": "Post 12",
      "file": "work/roxus/01xl57ai6ptbxcvlz2pvcixqyxvzjmhf3o",
      "folder": "Roxus",
      "alt": "Roxus — Post 12"
    },
    {
      "name": "Post 13",
      "file": "work/roxus/01xl57aizkon6h7kbr5zfi7tbjaxzpbv73",
      "folder": "Roxus",
      "alt": "Roxus — Post 13"
    },
    {
      "name": "Post 14",
      "file": "work/roxus/01xl57ai2tp5ere6mpafe2t4jkwtkoxckw",
      "folder": "Roxus",
      "alt": "Roxus — Post 14"
    },
    {
      "name": "Post 15",
      "file": "work/roxus/01xl57ai45rkbgnzp5mjgkjdbzalraqexo",
      "folder": "Roxus",
      "alt": "Roxus — Post 15"
    },
    {
      "name": "Post 16",
      "file": "work/roxus/01xl57ai5y6mm7rsvofnhivqwmuhta3rr7",
      "folder": "Roxus",
      "alt": "Roxus — Post 16"
    },
    {
      "name": "Post 17",
      "file": "work/roxus/01xl57aiz3xxjlky4fljdi2qkv7napzadj",
      "folder": "Roxus",
      "alt": "Roxus — Post 17"
    },
    {
      "name": "Post 18",
      "file": "work/roxus/01xl57ai2egzns54lhdnc2t32lxjhcvyq3",
      "folder": "Roxus",
      "alt": "Roxus — Post 18"
    },
    {
      "name": "Post 19",
      "file": "work/roxus/01xl57aiy3fmsmcjvjkjb2tjdphxrhotbk",
      "folder": "Roxus",
      "alt": "Roxus — Post 19"
    },
    {
      "name": "Post 20",
      "file": "work/roxus/01xl57ai4h7y4chpz2hve35dqrxrjcojk3",
      "folder": "Roxus",
      "alt": "Roxus — Post 20"
    },
    {
      "name": "Post 21",
      "file": "work/roxus/01xl57ai6swomajzlgondj4a33bnkjdwdh",
      "folder": "Roxus",
      "alt": "Roxus — Post 21"
    },
    {
      "name": "Post 22",
      "file": "work/roxus/01xl57ai6qxtzcnxvy3failw5uupczrkxd",
      "folder": "Roxus",
      "alt": "Roxus — Post 22"
    },
    {
      "name": "Post 23",
      "file": "work/roxus/01xl57ai6ftpkna2zk3rfz3xnve52cph6n",
      "folder": "Roxus",
      "alt": "Roxus — Post 23"
    },
    {
      "name": "Post 24",
      "file": "work/roxus/01xl57ai7aq6ql4emz7zgydzzlhfouqt7n",
      "folder": "Roxus",
      "alt": "Roxus — Post 24"
    },
    {
      "name": "Post 25",
      "file": "work/roxus/01xl57ai5aq54evbczzvdjuigfy3odekfa",
      "folder": "Roxus",
      "alt": "Roxus — Post 25"
    },
    {
      "name": "Post 26",
      "file": "work/roxus/01xl57aiy5zpxqv3vrzrgywoxojjqxps2e",
      "folder": "Roxus",
      "alt": "Roxus — Post 26"
    },
    {
      "name": "Post 27",
      "file": "work/roxus/01xl57ai2rpbqxrvhnnbdj7zuxmpexo5ox",
      "folder": "Roxus",
      "alt": "Roxus — Post 27"
    },
    {
      "name": "Post 28",
      "file": "work/roxus/01xl57aiyfbj4lbvxy75hyzix4mqn7ntx4",
      "folder": "Roxus",
      "alt": "Roxus — Post 28"
    },
    {
      "name": "Post 29",
      "file": "work/roxus/01xl57ai2a2jtrf2na6bazd2r7adxky7ba",
      "folder": "Roxus",
      "alt": "Roxus — Post 29"
    },
    {
      "name": "Post 30",
      "file": "work/roxus/01xl57ai6dplai4lr5mnbkyse5osuokwnk",
      "folder": "Roxus",
      "alt": "Roxus — Post 30"
    },
    {
      "name": "Post 31",
      "file": "work/roxus/01xl57ai2hjtmv5rro6fc3ymhit6mewrgk",
      "folder": "Roxus",
      "alt": "Roxus — Post 31"
    },
    {
      "name": "Post 32",
      "file": "work/roxus/01xl57aiyk4th3dczlozeywxuobi3wsyda",
      "folder": "Roxus",
      "alt": "Roxus — Post 32"
    },
    {
      "name": "Post 33",
      "file": "work/roxus/01xl57ai3i2vxbo2dyxfeyhdtqkyynrbnm",
      "folder": "Roxus",
      "alt": "Roxus — Post 33"
    },
    {
      "name": "Post 34",
      "file": "work/roxus/01xl57ai4olsjaiutag5ejoekzmdejyuhj",
      "folder": "Roxus",
      "alt": "Roxus — Post 34"
    },
    {
      "name": "Post 35",
      "file": "work/roxus/01xl57ai44xmrca73ukrhipr64tujwcg3g",
      "folder": "Roxus",
      "alt": "Roxus — Post 35"
    },
    {
      "name": "Post 36",
      "file": "work/roxus/01xl57aiynsm5idrseafg2qzr5lptzgatn",
      "folder": "Roxus",
      "alt": "Roxus — Post 36"
    },
    {
      "name": "Post 37",
      "file": "work/roxus/01xl57ai7ugb5dwvkrrrf3cozbqqu6mkiz",
      "folder": "Roxus",
      "alt": "Roxus — Post 37"
    },
    {
      "name": "Post 38",
      "file": "work/roxus/01xl57ai4nxmbmurbrhvhyynu5k67udwa5",
      "folder": "Roxus",
      "alt": "Roxus — Post 38"
    },
    {
      "name": "Post 39",
      "file": "work/roxus/01xl57ai76xxkxvpd7qjcy7sb3fq4nrqys",
      "folder": "Roxus",
      "alt": "Roxus — Post 39"
    },
    {
      "name": "Post 40",
      "file": "work/roxus/01xl57ai6suf2y55trnndztq2f77uajvax",
      "folder": "Roxus",
      "alt": "Roxus — Post 40"
    },
    {
      "name": "Post 41",
      "file": "work/roxus/01xl57ai6b3lqnarxeczaylza2yiuxziza",
      "folder": "Roxus",
      "alt": "Roxus — Post 41"
    },
    {
      "name": "Post 42",
      "file": "work/roxus/01xl57ai7fvuqoalnh4ra2jf24hwo7gwc7",
      "folder": "Roxus",
      "alt": "Roxus — Post 42"
    }
  ],
  "The Eye Associates": [
    {
      "name": "Frame 1",
      "file": "work/the-eye-associates/01xl57aiy6nowjxyyf6fdkmnsle5scsp4c",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 1"
    },
    {
      "name": "Frame 10",
      "file": "work/the-eye-associates/01xl57aiz2v32esduhizhjd4bffq2gmvdn",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 10"
    },
    {
      "name": "Frame 11",
      "file": "work/the-eye-associates/01xl57ai4skrf7wpbj7najz4ipdxixiaa3",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 11"
    },
    {
      "name": "Frame 12",
      "file": "work/the-eye-associates/01xl57ai7ensfvhfoq65dlwlhz4fz7xltp",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 12"
    },
    {
      "name": "Frame 13",
      "file": "work/the-eye-associates/01xl57ai3ake2i35hvdbbzkrqyyx3pyhm7",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 13"
    },
    {
      "name": "Frame 14",
      "file": "work/the-eye-associates/01xl57ai4hs3qx7ctaune3z2mq2bs7qkbs",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 14"
    },
    {
      "name": "Frame 15",
      "file": "work/the-eye-associates/01xl57aiyex5lwb5odfre2hr67znphp2kg",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 15"
    },
    {
      "name": "Frame 16",
      "file": "work/the-eye-associates/01xl57ai7wf7pqwyu7gvc22ryzigthcbho",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 16"
    },
    {
      "name": "Frame 3",
      "file": "work/the-eye-associates/01xl57aiym5xvsp42wqjdiagxew2i5zag3",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 3"
    },
    {
      "name": "Frame 4",
      "file": "work/the-eye-associates/01xl57ai4znxjfcjnylvcz7sbcv6j74jnc",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 4"
    },
    {
      "name": "Frame 5",
      "file": "work/the-eye-associates/01xl57ai45kfhjj7ybbrf3yusz2hdtpcjl",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 5"
    },
    {
      "name": "Frame 6",
      "file": "work/the-eye-associates/01xl57ai2w7z6yvi6ak5f22itn3yl6jd7s",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 6"
    },
    {
      "name": "Frame 7",
      "file": "work/the-eye-associates/01xl57ai6lmjvo364ndrbyzzleczj7jluu",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 7"
    },
    {
      "name": "Frame 8",
      "file": "work/the-eye-associates/01xl57aiy5zdvmlgopsbd3yht7me3xexi7",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 8"
    },
    {
      "name": "Frame 9",
      "file": "work/the-eye-associates/01xl57aiyu2g5bf733j5gzrefiz2hdltxz",
      "folder": "The Eye Associates",
      "alt": "The Eye Associates — Frame 9"
    }
  ],
  "WellSync": [
    {
      "name": "_Carousel",
      "file": "work/wellsync/01xl57ai5ivxtcsionafcz7xw3k3pztgb6",
      "folder": "WellSync",
      "alt": "WellSync — _Carousel"
    },
    {
      "name": "Carousel_cover",
      "file": "work/wellsync/01xl57aiyzgts22w3akbe3zbg5njkpd2kv",
      "folder": "WellSync",
      "alt": "WellSync — Carousel_cover"
    },
    {
      "name": "Carousel1",
      "file": "work/wellsync/01xl57ai22ywck3zw2vnejanawzosee6g6",
      "folder": "WellSync",
      "alt": "WellSync — Carousel1"
    },
    {
      "name": "Carousel2",
      "file": "work/wellsync/01xl57ai4kszpfg3nltjczw3jpl3wdrll3",
      "folder": "WellSync",
      "alt": "WellSync — Carousel2"
    },
    {
      "name": "Carousel3",
      "file": "work/wellsync/01xl57ai6fccx3lpfw6rf2vgoniky2encr",
      "folder": "WellSync",
      "alt": "WellSync — Carousel3"
    },
    {
      "name": "Carousel4",
      "file": "work/wellsync/01xl57aiz4aka4h5mkgrdzpuqd5az4ezp5",
      "folder": "WellSync",
      "alt": "WellSync — Carousel4"
    },
    {
      "name": "Carousel5",
      "file": "work/wellsync/01xl57aiz5y62u7dh4ojdzjjwtu2ko3as3",
      "folder": "WellSync",
      "alt": "WellSync — Carousel5"
    },
    {
      "name": "Carousel6",
      "file": "work/wellsync/01xl57ai7r5dl5ww7fijhl3aj5gx3gclyt",
      "folder": "WellSync",
      "alt": "WellSync — Carousel6"
    },
    {
      "name": "Carousel7",
      "file": "work/wellsync/01xl57ai4hlk4xrmnvlrg3iybn6qzq4rum",
      "folder": "WellSync",
      "alt": "WellSync — Carousel7"
    }
  ],
  "Wellya": [
    {
      "name": "1010x1350",
      "file": "work/wellya/01xl57aizcxipmsjrfkrg3vhrhh535wwa2",
      "folder": "Wellya",
      "alt": "Wellya — 1010x1350"
    }
  ]
};
