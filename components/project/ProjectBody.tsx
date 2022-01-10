import React from "react";
import styled from "styled-components";
import Image from "next/image";

type TProejctBodyProps = {
  children: React.ReactNode;
  coverImagePath?: string;
};

const Container = styled.div`
  display: flex;
`;

const CoverImage = styled.section`
  width: 50%;
  margin-right: 2rem;
  flex: 1;
`;

const Content = styled.section`
  flex: 2;
`;

const ProjectBody: React.FC<TProejctBodyProps> = ({
  children,
  coverImagePath
}) => {
  return (
    <Container>
      {coverImagePath && (
        <CoverImage>
          <Image
            src={coverImagePath}
            alt="project cover image"
            width={500}
            height={500}
          />
        </CoverImage>
      )}
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        sed necessitatibus maiores atque temporibus eum. Ullam reprehenderit
        illo itaque dolor, a temporibus dignissimos sit, deserunt recusandae,
        exercitationem tenetur doloribus optio? Voluptate, maiores aliquam minus
        ipsum magni dolorum suscipit fugiat, earum ipsam quas veniam? Tenetur,
        officia dignissimos quos quas mollitia at soluta. Cupiditate omnis ea
        voluptatem atque nobis voluptate suscipit doloremque. Recusandae odit
        expedita quo minima rerum, cum iste labore quis at vitae fuga id
        explicabo. Ex, corrupti error ipsam modi recusandae quos architecto quis
        non. Sapiente doloribus fugiat odio consequuntur! Minus quasi modi
        facere recusandae commodi praesentium ad cupiditate at quo ducimus?
        Nihil architecto delectus nostrum id voluptates culpa ex odio, sint
        natus libero? Temporibus optio perspiciatis veniam repudiandae ratione?
        Repellendus autem harum iusto quas recusandae dolorum ut sequi. Officia
        dolorum aliquam dolorem molestiae quaerat delectus ipsa, autem
        cupiditate suscipit modi maiores soluta voluptas officiis quidem
        distinctio, atque exercitationem adipisci! Vero adipisci placeat facere
        dolorum laboriosam eum optio reiciendis quaerat perspiciatis blanditiis
        odio cumque at modi animi sit architecto est, culpa perferendis,
        exercitationem doloribus! Odit deserunt placeat blanditiis quod
        explicabo? Recusandae asperiores reprehenderit quibusdam dicta
        laboriosam ducimus et aspernatur! Amet, necessitatibus molestiae
        dolorum, excepturi libero, voluptas tempore eligendi quae repudiandae
        architecto temporibus perferendis delectus. Cumque modi impedit et sunt
        mollitia! Voluptatibus, placeat rem sint fugit, laboriosam iure
        molestias id libero ad, corporis quasi sed? Quos velit fuga voluptate
        iusto optio quod, rerum tempora corrupti! Ut non praesentium vel
        temporibus voluptates. Nulla inventore, voluptatum beatae quibusdam
        natus, dolorum, quae voluptate repudiandae doloremque provident voluptas
        est. Rerum et tempora deserunt ipsam optio voluptatem, officiis iure
        nobis error. Optio, neque. Voluptatibus, quaerat dolores. Corporis dicta
        architecto fuga odit, illum nam mollitia quo, officia aut quia
        consequatur. Culpa debitis, eum architecto vero dolorem incidunt! A
        beatae reiciendis tenetur fugit eveniet id voluptate quam? Itaque! Animi
        laborum distinctio cum non officiis doloremque aut officia consequatur?
        Blanditiis voluptatibus aperiam labore alias corrupti laboriosam rem
        quidem, aliquam possimus libero tempora iusto quibusdam sunt harum ipsa
        incidunt odio! Illo necessitatibus voluptatum nulla, dignissimos,
        quibusdam neque hic unde illum blanditiis beatae tenetur cum labore
        cupiditate ducimus fugiat asperiores modi nam laudantium repudiandae
        provident odio libero velit iusto doloribus. Dolor? Quibusdam et
        consectetur eveniet voluptatem, deserunt, officia, dicta reiciendis
        optio consequuntur libero amet nobis omnis ipsa dolorem mollitia ipsum
        ratione nam unde earum assumenda. Nobis veniam distinctio est inventore
        molestias. Ducimus magni natus veniam nam, necessitatibus fugiat ea
        neque repudiandae sapiente assumenda, quo facilis ullam? Aperiam
        pariatur inventore et repudiandae nemo mollitia repellat dolores nulla,
        debitis nihil a recusandae in. Quia minima modi eligendi voluptatem
        fugit harum deleniti repellendus beatae alias dolores unde doloribus
        eveniet ratione, vel, cupiditate consequuntur eaque quibusdam earum quae
        praesentium rem sed quis nesciunt. Id, quod. Eius corporis odit id
        officiis praesentium. Quo sunt quos voluptatem placeat, exercitationem
        velit saepe nulla, ipsum omnis iste iure cum magni, voluptatibus
        deserunt necessitatibus in. Natus consequuntur quod excepturi provident.
        Atque necessitatibus doloremque iste earum molestiae possimus maxime
        vero obcaecati quis ducimus iure dolorem non perferendis beatae
        quibusdam id fuga accusantium dignissimos culpa eaque commodi provident,
        exercitationem quia. Consequuntur, harum. Odit fuga nulla labore,
        voluptatum accusamus eum iusto optio cumque excepturi ratione, atque
        quidem ab, consequuntur facere obcaecati aut doloribus repellendus
        nostrum! Facere officiis voluptate quaerat id sequi eos eligendi! Ipsam,
        et laborum. Dolores dolorem beatae, dignissimos odit eum optio, quisquam
        doloribus temporibus reiciendis atque expedita facilis autem praesentium
        dolorum aliquam quam eos impedit officia. Doloremque dolore animi
        quisquam expedita! Debitis ut repellendus nulla fuga quam provident
        iusto asperiores distinctio voluptatibus vero ea voluptates
        necessitatibus iure reiciendis eius velit ducimus deleniti vitae impedit
        sunt maiores doloremque molestias, laudantium laborum. Tenetur. Magni
        sed quo esse eveniet necessitatibus repudiandae, placeat earum voluptas
        quis debitis quibusdam consequuntur, perspiciatis, dolores praesentium
        eos illo illum dolore. Incidunt ea ratione autem eum distinctio optio
        vero fuga. Totam quas quis rem molestiae aliquid cum sunt eos, eius
        blanditiis, dolorem suscipit excepturi, culpa explicabo accusamus.
        Molestiae deleniti doloribus cum doloremque, perferendis dignissimos
        provident a tempore, odit rem voluptatibus? Earum, sint. Earum numquam
        molestias beatae ut nostrum animi laudantium quam a accusamus libero
        optio assumenda excepturi ipsa repellendus vel illum corrupti
        perspiciatis facere, velit aut. Ducimus quibusdam aliquid totam! Harum
        unde praesentium voluptas? Soluta, sequi dolore. Eveniet repudiandae
        exercitationem dignissimos nisi reiciendis suscipit odio illo animi
        ullam porro quaerat quas, tempora ipsa illum magni autem rem tenetur
        molestiae architecto. Ex deleniti dolorem quibusdam! Laudantium,
        consequuntur pariatur! Voluptas corrupti saepe repudiandae quod tempora
        necessitatibus consequatur at, est deserunt veniam modi molestiae
        pariatur expedita molestias voluptatibus ex non eos et id. Cumque ut
        veniam, adipisci reprehenderit cum, perspiciatis qui nam et explicabo
        consectetur harum mollitia velit amet officia ratione cupiditate
        consequuntur at, commodi exercitationem. Voluptatem vel voluptate quidem
        asperiores, odio distinctio. Explicabo earum fuga sint sapiente velit
        temporibus quaerat alias repudiandae rem hic reprehenderit nisi, ut eos
        ad? Error quibusdam tempore saepe temporibus qui deserunt doloremque
        rerum, quos veritatis ducimus incidunt? Nulla corporis reiciendis totam
        voluptas minus cum veniam deleniti porro, nobis fugit neque aperiam at
        aut voluptates et rerum sapiente animi facilis. Ipsa ab eligendi maxime
        impedit, reiciendis modi nisi? Accusamus delectus incidunt recusandae
        qui architecto voluptatibus aliquid. Nobis, quos nisi a optio eos, error
        labore quia deserunt ducimus illum nulla, unde animi veritatis iste
        voluptatibus numquam quam placeat magni? Eveniet odio tenetur nemo
        aliquid, enim libero, et minus repellendus vel, itaque accusamus. Ad
        ullam perspiciatis error optio magnam, nesciunt quam, voluptatum odio
        enim tempore voluptate similique, blanditiis totam facere? Porro vitae
        molestias labore quod! Harum pariatur, adipisci libero accusantium eius
        earum doloremque magni mollitia, voluptas non dignissimos molestiae!
        Delectus alias esse eum soluta debitis voluptas at explicabo, cumque
        praesentium! Fuga consequatur quo voluptate similique quibusdam tenetur
        consectetur facilis harum, esse quasi eius eligendi! Dolorum, earum
        ipsa. Nobis repudiandae optio rem atque esse eius dolore et! Blanditiis
        minima atque laudantium? Sit exercitationem corrupti quam saepe
        voluptatibus quia consequuntur numquam reprehenderit ex, fugit fuga
        molestiae vel asperiores obcaecati non provident porro doloremque
        suscipit laudantium enim quaerat quo! Laudantium, illo distinctio!
        Itaque! Ad non autem, sunt cupiditate expedita veritatis temporibus
        assumenda repellat deleniti necessitatibus tempore inventore eaque
        laboriosam! Praesentium a, quibusdam voluptatibus dignissimos minima
        fugit sit necessitatibus asperiores blanditiis dolorum eos excepturi?
        Incidunt veritatis vitae esse quae, inventore velit iure voluptate sed
        quam explicabo, omnis possimus id nisi eveniet quia soluta, molestiae
        quasi. Animi, aut unde! Molestias placeat repellendus suscipit aliquid
        nobis. Animi eos molestiae doloribus dolorum iusto libero sit modi
        eveniet, deleniti quisquam officia accusantium saepe quo temporibus non
        aliquid iure totam possimus molestias quas eius sunt facilis aliquam.
        Soluta, voluptatum. Dolorum ab magni sint quia sequi perferendis
        doloremque voluptate, maxime, odit modi itaque blanditiis esse obcaecati
        ipsum delectus. Quasi impedit reprehenderit iure maxime doloremque natus
        temporibus, quaerat nihil in ut? Illum est architecto eaque praesentium
        eius quia sequi, fugit deleniti enim ad quaerat necessitatibus, vitae
        cupiditate laboriosam? Ea, rerum molestiae maxime voluptas aliquid,
        incidunt corrupti accusantium, earum officiis omnis dolor? Quas odit
        repellat laboriosam quaerat ducimus error natus magni. Labore repellat
        cupiditate fugit voluptatem accusantium impedit placeat nobis optio
        temporibus deserunt debitis tenetur, nulla magni qui deleniti hic
        nesciunt facilis. Natus magnam hic in consectetur omnis nulla
        reiciendis, harum cum maiores delectus. Minima sapiente cumque illum
        repudiandae ea neque dolore at, quia aut suscipit eos consectetur!
        Deserunt aspernatur consectetur dignissimos. Consectetur, minima sunt
        eligendi repellat harum eum itaque quaerat, saepe eveniet voluptatibus
        eos nesciunt vitae sint officiis consequatur aut amet dolores inventore?
        Dolore aliquid repudiandae enim, delectus ipsa similique aut. Eligendi
        atque fugiat hic deserunt placeat voluptas modi, harum corrupti
        voluptates iusto tempora accusantium, asperiores magnam at rerum quae
        est! Iusto modi rerum libero aut quas nisi deserunt et dolore! Adipisci
        voluptates nostrum vitae ipsa, facilis eligendi numquam, cupiditate
        magni, repellendus architecto nam perferendis dolor autem corporis
        dolorum molestiae corrupti reiciendis? Excepturi, illum hic. Aperiam
        architecto sed excepturi voluptate tempore. At nulla rem odio quisquam,
        illo molestias ea iure sit explicabo optio consequuntur voluptatibus
        incidunt aspernatur sed ab velit similique natus saepe ratione porro
        placeat autem! Exercitationem animi molestias pariatur. Obcaecati, at?
        Repellendus minus recusandae officia deleniti fugiat illum dolorem
        reiciendis cumque tempore praesentium explicabo exercitationem fugit
        aliquam facere iure commodi at nisi impedit ad, vel voluptatibus magni
        voluptates. Repellat. Voluptatibus, at? Eligendi magnam assumenda fuga
        consequuntur facilis accusantium. Exercitationem architecto dolor, a
        incidunt quo animi ipsum voluptate soluta itaque alias illum! Odit
        consequatur id ipsum numquam ipsa amet quisquam? Necessitatibus
        perspiciatis accusamus aliquam obcaecati id in voluptates ea veritatis
        illum cumque alias distinctio ad expedita labore amet repudiandae
        inventore, ratione repellat eveniet consectetur officia optio
        reiciendis. Maxime, at unde. Mollitia, voluptates incidunt! Corrupti,
        eaque laudantium perspiciatis minima quos odio, ut quaerat non minus
        quibusdam beatae exercitationem nihil iure commodi, eius fugiat eum.
        Totam maxime quibusdam odio? Natus, harum sunt. Voluptate expedita vel
        laudantium, ducimus nobis, nulla vitae amet reiciendis eligendi unde
        corrupti debitis molestias sapiente accusantium modi ab consequuntur
        minima. Facere rerum architecto ratione excepturi harum temporibus eum
        vel. Sit dolor nostrum, veritatis incidunt ut praesentium eligendi vitae
        est in inventore sapiente officiis natus nam ipsum doloribus magni illum
        culpa, optio, odit mollitia minus repellat? Error illum atque expedita.
        Tempore laudantium ipsam delectus tenetur molestias sint? In minima
        sequi est facilis officia, officiis aperiam nisi tempora reiciendis
        debitis accusamus dicta illum quod odio ipsam hic ipsa ex expedita.
        Libero! Quibusdam explicabo at fugiat minima, architecto odio similique
        aut impedit quo est tempora harum. Possimus qui voluptate necessitatibus
        eligendi sapiente error molestiae, cumque dignissimos voluptatem modi a
        ea accusamus obcaecati. Commodi nihil mollitia quibusdam deserunt labore
        illo optio ipsum, quis odio tempora laborum accusantium cum? Iste dolor
        quibusdam debitis assumenda modi quos ratione deleniti in, maiores quas
        dolorum delectus laborum? Odio magni exercitationem temporibus aperiam
        eius, omnis officia voluptates? Quam voluptas magni at blanditiis
        doloribus animi veritatis laudantium error quibusdam nam ad, incidunt
        porro explicabo neque necessitatibus provident assumenda? Accusamus.
        Voluptatibus magnam vitae, veniam nesciunt inventore et, doloremque ex
        voluptates fugiat dolorem, adipisci dolore cumque laudantium ipsum hic
        itaque! Dolores ab, consectetur quidem ea tempore deleniti nam quae
        dolorum autem? Obcaecati, nesciunt magni, libero aliquam quaerat eos
        necessitatibus consequuntur animi veniam suscipit rerum temporibus
        adipisci corporis cupiditate molestiae iure molestias ex deleniti
        repellendus et. Maiores cum accusamus quam eum eius! Adipisci facere
        accusamus at numquam magnam quaerat optio autem voluptatum, harum
        suscipit nesciunt recusandae mollitia ex praesentium illo quis sint
        sapiente reiciendis dignissimos laborum, cumque tenetur quae qui
        perspiciatis. Est? Dignissimos voluptatem qui tempore ad nisi unde
        voluptas quae? Minima atque quod perferendis earum, nam rem provident
        impedit consequuntur quisquam. Alias reprehenderit vitae, ipsum minus
        dignissimos deleniti voluptate atque perferendis? Vitae excepturi
        sapiente odio ullam numquam alias dicta fuga, quisquam, veritatis
        consectetur possimus voluptatibus iusto consequatur voluptates qui
        aliquid obcaecati recusandae aut porro nihil. Aut dolores nesciunt earum
        unde magni! Porro non hic mollitia. Minima quisquam tempora praesentium!
        Fuga, voluptate commodi. Eius nemo amet maxime enim facere voluptates
        dicta, officiis ratione temporibus consequatur sed quasi quia sequi
        laborum assumenda vitae? Ratione, beatae nesciunt! Temporibus dolorem
        quibusdam laudantium laboriosam asperiores quis tenetur dolores aliquid
        hic adipisci quam explicabo error exercitationem ea, inventore quidem
        optio alias quisquam sapiente dolore. Impedit, voluptatum tempore. Atque
        veniam, quam ducimus aliquid quia rerum velit repellendus tempore
        deserunt nostrum, molestiae fuga reprehenderit sequi rem id consectetur
        dolores eius accusamus maxime autem minus quis! Numquam dicta eaque
        fuga? Tempore quia voluptates repudiandae amet aperiam, iure illo,
        voluptatibus vitae, quod accusantium eum ea? Voluptatem magnam maxime
        labore rem iste quidem. Perferendis deleniti at doloremque inventore
        magnam aut ab officiis. Architecto mollitia nesciunt modi impedit
        similique quia facilis sed ut possimus autem tempora incidunt
        praesentium, corporis officia dolorum rerum ex molestias ullam aperiam
        vero eius. Explicabo culpa sunt consequatur nobis. Ducimus repudiandae
        porro tenetur natus aliquam assumenda, rem magnam doloremque explicabo
        aspernatur sit ipsum aperiam ipsam voluptatibus quaerat tempore et
        maiores. Eaque, quis? Voluptatem est, unde quo quibusdam suscipit
        tempora? Asperiores magnam nobis, maiores minus, minima fugiat modi
        dignissimos cum, perspiciatis pariatur ex doloremque distinctio. Quod
        dolorum dolor, laudantium cupiditate dolore maxime magnam possimus
        delectus porro facere, dicta commodi temporibus! Similique culpa
        sapiente ad fuga nostrum magni saepe quae illo maiores mollitia adipisci
        eligendi hic quasi dignissimos, accusantium quas nemo dolore numquam.
        Dolor facere nostrum vero explicabo corrupti nihil ex? Pariatur totam
        eveniet harum itaque vel vitae, sequi maiores illo odit eum dignissimos
        ad soluta quae accusamus. Unde neque culpa voluptas, a, minus libero
        atque voluptate aliquam quibusdam amet adipisci. Architecto cupiditate
        culpa libero explicabo, odit ad molestiae, ea consectetur at voluptas
        laudantium eveniet magni accusantium, vero aliquid veritatis? Illum ipsa
        voluptatibus distinctio, aliquid molestiae veniam aliquam! Numquam,
        possimus consequatur? Voluptatibus quidem ducimus magnam incidunt cum?
        Voluptatibus, illum reprehenderit nobis repellat architecto voluptate
        eveniet doloribus non quae voluptas, voluptatem consectetur molestiae,
        id iste et fuga mollitia ad accusantium consequuntur velit. Praesentium
        cumque dolores doloremque fugit quos? Deleniti quas atque provident
        voluptates sint ipsa cupiditate neque et assumenda, at sequi, maiores
        quo asperiores ipsum, vero totam facilis? Nobis cum eum placeat. Nam
        porro fugit, fugiat repellendus velit debitis nisi esse deserunt
        impedit, incidunt dolores soluta magni et tenetur officia eveniet
        numquam? Adipisci maiores amet labore laboriosam consequuntur aperiam
        sequi consequatur sed? Sint rem ipsa error facilis est, ut deleniti
        blanditiis animi ad! Quia natus nisi aliquid quae et, sint accusamus, id
        at vero, praesentium perspiciatis totam beatae fuga eum mollitia facere.
        Quasi optio odit, officia inventore, placeat asperiores mollitia aliquid
        quod sed alias rerum a voluptates temporibus sit repellat. Autem
        repellendus beatae quo velit veniam ut dolor nemo voluptates consectetur
        ea? Saepe autem architecto sapiente quia ipsum aliquid beatae ex facere
        repellendus assumenda totam rem enim, itaque quaerat eveniet. Vero
        eveniet et facere voluptas dolores facilis natus excepturi, vel eaque
        ducimus! Expedita aliquid reiciendis error nam quas labore velit, eius
        aspernatur iusto fugit asperiores harum esse dolorum aut omnis pariatur
        ab praesentium animi odio! Impedit enim natus fugiat eveniet officiis
        saepe. Fugit provident error quam modi suscipit dolorem aperiam magni
        doloremque earum minus temporibus accusamus beatae, laudantium fuga,
        vitae debitis deserunt, autem omnis quas quasi. Quis ullam possimus
        similique nisi ea. Quasi quis iusto dolor architecto magni saepe. Earum
        assumenda eos molestias sed voluptas dolore porro? Voluptatum quia
        magnam reprehenderit voluptas, quod aut nesciunt minus esse veniam,
        vitae, necessitatibus eum aliquam. Blanditiis sunt, eos pariatur vero
        consectetur quisquam iure! Obcaecati, porro quam. Officiis voluptates
        deleniti fugiat, laborum voluptatem quo beatae pariatur iusto debitis at
        distinctio veniam dicta quaerat voluptatibus et maiores. Itaque dolorum
        quasi officia nam perferendis, quod accusantium praesentium saepe
        placeat debitis nobis sequi nostrum totam reiciendis ullam tempore
        libero nulla voluptatum. Eum adipisci assumenda accusantium ullam libero
        ad fugiat. Distinctio eum dignissimos, perferendis earum eveniet, enim
        iste maxime voluptatibus facilis incidunt facere corporis nesciunt
        nostrum commodi, architecto quae officia! Quis eos enim reiciendis error
        porro assumenda beatae dolorum autem. Cupiditate ipsam consectetur,
        quibusdam non officia quisquam nulla molestiae ullam nihil rerum esse
        architecto earum, optio obcaecati est laborum dolorum asperiores
        expedita excepturi? Culpa quis impedit, hic ullam ipsa reprehenderit.
        Blanditiis vero laborum asperiores omnis! Quibusdam officia perspiciatis
        tempora debitis impedit itaque nisi vero aspernatur modi sed accusamus
        eaque culpa, temporibus omnis esse corrupti. Sit nobis dolores
        accusantium quis facilis! Quasi voluptates laboriosam cum omnis expedita
        ducimus in ex debitis quidem ipsum reiciendis, laudantium provident
        totam voluptas nisi delectus neque veritatis consequuntur ratione.
        Consequatur quisquam ullam velit animi similique voluptates! Deserunt
        placeat, numquam, nesciunt natus vel veniam libero reiciendis unde harum
        quisquam saepe. Veniam nihil officiis libero iste iusto totam asperiores
        perferendis hic quasi aspernatur a, eaque quibusdam? Impedit, vel. Ipsum
        id fugiat laborum voluptatibus provident. Officiis iusto, esse officia
        sed cum minima ea voluptatum iure illum enim sint. Ab modi tempora
        deleniti. Nemo, quod commodi exercitationem sequi consectetur molestiae?
        Et ad ipsum ipsa odit magnam nesciunt consequuntur placeat voluptatum
        praesentium molestias, fugit natus, facere, neque expedita unde optio
        quam suscipit. Reprehenderit quod doloribus exercitationem quis? Sint
        perferendis repellendus rem! Eos necessitatibus ipsam ullam quam. Soluta
        quibusdam necessitatibus ipsum culpa tempora dolore dolorum suscipit
        molestias atque! Minima possimus eligendi eius libero, deleniti, cum
        culpa sint neque mollitia quis praesentium laboriosam. Magnam veniam sed
        excepturi? Sequi dicta accusantium, quae illum blanditiis qui obcaecati
        distinctio vero cum eligendi exercitationem eveniet harum adipisci saepe
        quidem tenetur odio, iure nobis maiores ipsum explicabo error! Itaque,
        natus est obcaecati nulla praesentium, dolor quis amet nemo nam
        exercitationem beatae, qui repudiandae doloribus id facilis accusantium!
        Eveniet excepturi incidunt repellat doloribus laudantium quasi dolorum
        labore odit dolore. Nemo odio quam beatae doloribus mollitia fuga
        tempora corporis accusantium. Aliquam quibusdam neque aut laudantium
        voluptatum, inventore tempora fugiat impedit dolores aliquid ullam earum
        beatae, magnam quam modi, et vel! A nisi ipsa incidunt dolore sit optio
        quod ullam, eaque in fugit magni tenetur magnam sequi explicabo
        necessitatibus. Iure quasi dignissimos ullam, quas quidem reprehenderit
        labore id rerum repellendus sapiente. In voluptate saepe, ratione
        quisquam, omnis at numquam perspiciatis nulla repudiandae asperiores
        dolorum assumenda aliquam, fuga accusamus ex quibusdam sequi recusandae
        voluptatibus voluptates illum quaerat voluptatum? Error amet rerum
        officiis. Ullam error laboriosam necessitatibus numquam sit. Sit, error
        quae? Earum enim repudiandae repellat unde minima, animi sit dicta
        doloremque porro molestias voluptate fugiat, quo consequuntur ea
        deserunt ex amet ducimus? Voluptatem, odio adipisci ad illo voluptates
        pariatur fugiat animi consequuntur necessitatibus dignissimos laborum
        ducimus ullam nulla suscipit hic atque earum numquam repudiandae,
        repellat nihil! Nostrum impedit nulla et adipisci neque. Eveniet
        distinctio reprehenderit modi assumenda esse unde repellendus, odit
        quaerat ad autem, laudantium totam dolorum quibusdam nostrum libero,
        natus tempore vitae impedit molestiae rerum alias perferendis hic
        officia eos! Quos? At facere corporis natus nulla dignissimos. Commodi
        accusantium labore iusto nostrum ex sit explicabo sunt cumque doloremque
        animi provident rem quia perspiciatis, esse reiciendis eius quis
        voluptate aperiam. Ipsam, ex! Laborum veritatis dolorem libero tempore
        reiciendis placeat quaerat totam enim sed voluptatibus rem asperiores
        ducimus possimus atque aut illum velit cumque, illo facere alias
        accusamus! Consectetur vitae id itaque laboriosam! Qui minus eveniet
        dolores provident inventore porro corrupti soluta perferendis, libero
        iste earum exercitationem! Ab est eius fugit, tempora unde ipsa saepe
        omnis sapiente facere consectetur? Minima, esse? Magni, perspiciatis. At
        dolorem vero saepe modi non. Quidem nobis ab possimus, quae hic
        blanditiis at, officiis nam aliquam beatae similique iusto repudiandae
        commodi reiciendis quos repellendus. Autem in eaque ab ducimus.
      </Content>
    </Container>
  );
};

export default ProjectBody;
