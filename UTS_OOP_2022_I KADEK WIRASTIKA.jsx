do{
        System.out.println("==============Masukan Data Pengunjung==============");
        System.out.println("Tampilkan Data Pengunjung");
        System.out.println("Isi Data Pengunjung");
        System.out.println("Keluar");
        System.out.print("Pilih menu :");
        n = input.nextInt();
        
          
        if(n==1){
           
           System.out.println("Isi Data Nama Pengunjung Kebun Binatang");
          
           System.out.print("Masukan Nama    :");
           String nama=input.next();
           coba.add(nama);
            }
            else if (n==2){
            System.out.println("Isi Data Nama Pengunjung Kebun Binatang");
   
            System.out.print("Masukan Nama    :");
            String nama=input.next();
            coba.add(nama);
            }     
       }while(n!=3);
