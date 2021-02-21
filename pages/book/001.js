import Image from 'next/image'
import Link from "next/link"
import Layout from '../../components/layout'

export default function page001() {
    return <Layout isBook>
        <Image
            priority
            src="/images/book/img1.gif"
            width={400}
            height={500}
            alt="illustration 001"
        />
        
        <p>Leonardus Crassus Veronensis Guido Illustrissimo Duci Urbini Salutem Plurimam Dicit.</p>

        <p>CUM semper Dux invictissime ob singulares virtutes et famam tui nominis tecolui et observavi, tum maxime ex quo frater meus tuis auspiciis in Bibienae obsidionemilitavit, quicquid enim tunc per te in eum collatum fuit, id autem multum fuissesaepe memorat benignitatem et humanitatem in se tuam referens, id totum adCrassos omnes pertinere arbitrati sumus, et quod unus tulit, id omnes tibi acceptumferimus, nec iam ei concedimus, ut magis tuus sit, quam nos omnes sumus. Sedfratres mei occasionem expectant causa tua non modo sua omnia, sed vitam etiamexponendi. Ego autem, qui pro virili mea, quonam pacto me tibi aperiam saepe cogito, cogitaboque, donec perfecero, nunc in voti mei spem venio aliquam. Nam, cum sciamtecum non fortunae bonis plus agi posse, quam aquis (ut fertur) cum mari, solasqueapud te literas et virtutes posse, literis aditum ad te tanquam vadum tentavi. Venitnuper in manus meas novum quoddam et admirandum Poliphili opus (id enim nomenlibro inditum est) quod ne in tenebris diutius lateret, sed mortalibus mature prodesset, sumptibus meis imprimendum et publicandum curavi. Verum ne liber iste parenteorbatus veluti pupillus sine tutela, aut patrocinio aliquo esse videretur te patronumpraesentem delegimus, in cuius nomen audaculus prodiret, quo, ut ego amoris nunc etobservantiae in te meae ministro et nuncio, sic tu ad studia, et multiplicem doctrinamtuam socio saepe utereris. Tanta est enim in eo non modo scientia, sed copia, ut cumhunc videris, non magis omnes veterum libros, quam naturae ipsius occultas resvidisse videaris. Res una in eo miranda est, quod cum nostrati lingua loquatur, non minus ad eum cognoscendum opus sit graeca et romana, quam tusca et vernacula.</p>

        <p>Cogitavit enim vir sapientissimus, si ita loqueretur, unam esse viam, et rationem, qua nullus, quin aliquid disceret veniam negligentiae suae praetendere posset, sed tamen ita se temperavit, ut nisi, qui doctissimus foret in doctrinae suae sacrarium penetrare non posset, qui vero non doctus accederet non desperaret tamen. Illud accedit, quod si quae res natura sua difficiles essent, amoenitate quadam tamquam reserato omnis generis florum viridario oratione suavi declarantur, et proferuntur figurisque et imaginibus oculis subiectae patent et referuntur. Non hic res sunt vulgo expositae et triviis decantandae, sed quae ex philosophiae penu depromptae, et musarum fontibus haustae quadam dicendi novitate perpolitae ingeniorum omnium gratiam mereantur. Suscipias igitur princeps humanissime Poliphilum nostrum, qua doctos fronte soles, et ita suscipias, ut cum animi grati munusculum sit, tui Leonardi Crassi admonitus libentius legas quod si (ut spero) feceris, et hic nullius censuram</p>

    </Layout>
}
