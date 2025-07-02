const Footer = () => {
  return (
  <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
    <h1 className="text-2xl font-bold">Portofolio</h1>
    <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#talent">Talent</a>
    </div>
    <div className="flex items-center gap-3">
        <a href="https://github.com/fathir150280">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/__alfatt?igsh=bTUwczA3MnZ1bnBk">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://youtube.com/@muhammadfathiralfathsyah?si=ADWbqA_ncJf35NV2">
            <i className="ri-youtube-fill ri-2x"></i>
        </a>
    </div>
    <div>
        <p>© 2025 Code With Fathir. All Rights Reserved.</p>
    </div>
  </div>
  );
};

export default Footer;
