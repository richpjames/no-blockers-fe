import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.ff8255a1.js';

/* src/routes/about.svelte generated by Svelte v3.31.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let a0;
	let t5;
	let t6;
	let t7;
	let p0;
	let t8;
	let a1;
	let t9;
	let t10;
	let t11;
	let p1;
	let t12;
	let t13;
	let p2;
	let t14;
	let t15;
	let p3;
	let t16;
	let t17;
	let p4;
	let t18;
	let t19;
	let p5;
	let t20;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("About");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("Photo by ");
			a0 = element("a");
			t5 = text("Florian Klauer");
			t6 = text(" on Unsplash");
			t7 = space();
			p0 = element("p");
			t8 = text("Text placeholder via ");
			a1 = element("a");
			t9 = text("Jeffsum");
			t10 = text(".");
			t11 = space();
			p1 = element("p");
			t12 = text("So you two dig up, dig up dinosaurs? What do they got in there? King Kong? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Life finds a way. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.");
			t13 = space();
			p2 = element("p");
			t14 = text("You really think you can fly that thing? You know what? It is beets. I've crashed into a beet truck. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?");
			t15 = space();
			p3 = element("p");
			t16 = text("Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! I was part of something special. Just my luck, no ice. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?");
			t17 = space();
			p4 = element("p");
			t18 = text("Jaguar shark! So tell me - does it really exist? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?");
			t19 = space();
			p5 = element("p");
			t20 = text("Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. They're using our own satellites against us. And the clock is ticking. Do you have any idea how long it takes those cups to decompose. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			figure = claim_element(div_nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { src: true, alt: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "Photo by ");
			a0 = claim_element(figcaption_nodes, "A", { href: true, target: true });
			var a0_nodes = children(a0);
			t5 = claim_text(a0_nodes, "Florian Klauer");
			a0_nodes.forEach(detach_dev);
			t6 = claim_text(figcaption_nodes, " on Unsplash");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", {});
			var p0_nodes = children(p0);
			t8 = claim_text(p0_nodes, "Text placeholder via ");
			a1 = claim_element(p0_nodes, "A", { href: true, target: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "Jeffsum");
			a1_nodes.forEach(detach_dev);
			t10 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach_dev);
			t11 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", {});
			var p1_nodes = children(p1);
			t12 = claim_text(p1_nodes, "So you two dig up, dig up dinosaurs? What do they got in there? King Kong? My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Life finds a way. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.");
			p1_nodes.forEach(detach_dev);
			t13 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", {});
			var p2_nodes = children(p2);
			t14 = claim_text(p2_nodes, "You really think you can fly that thing? You know what? It is beets. I've crashed into a beet truck. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?");
			p2_nodes.forEach(detach_dev);
			t15 = claim_space(div_nodes);
			p3 = claim_element(div_nodes, "P", {});
			var p3_nodes = children(p3);
			t16 = claim_text(p3_nodes, "Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Hey, take a look at the earthlings. Goodbye! I was part of something special. Just my luck, no ice. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?");
			p3_nodes.forEach(detach_dev);
			t17 = claim_space(div_nodes);
			p4 = claim_element(div_nodes, "P", {});
			var p4_nodes = children(p4);
			t18 = claim_text(p4_nodes, "Jaguar shark! So tell me - does it really exist? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?");
			p4_nodes.forEach(detach_dev);
			t19 = claim_space(div_nodes);
			p5 = claim_element(div_nodes, "P", {});
			var p5_nodes = children(p5);
			t20 = claim_text(p5_nodes, "Yes, Yes, without the oops! Do you have any idea how long it takes those cups to decompose. They're using our own satellites against us. And the clock is ticking. Do you have any idea how long it takes those cups to decompose. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!");
			p5_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 24, 2, 327);
			if (img.src !== (img_src_value = "rsz_florian-klauer-489-unsplash.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "A vintage typewriter.");
			attr_dev(img, "class", "svelte-1t712sc");
			add_location(img, file, 26, 4, 357);
			attr_dev(a0, "href", "https://unsplash.com/@florianklauer");
			attr_dev(a0, "target", "_blank");
			add_location(a0, file, 27, 25, 458);
			add_location(figcaption, file, 27, 4, 437);
			attr_dev(figure, "class", "svelte-1t712sc");
			add_location(figure, file, 25, 2, 344);
			attr_dev(a1, "href", "https://jeffsum.com/");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 29, 26, 602);
			add_location(p0, file, 29, 2, 578);
			add_location(p1, file, 30, 2, 668);
			add_location(p2, file, 31, 2, 999);
			add_location(p3, file, 32, 2, 1266);
			add_location(p4, file, 33, 2, 1554);
			add_location(p5, file, 34, 2, 1828);
			attr_dev(div, "class", "container");
			add_location(div, file, 23, 0, 301);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			append_dev(div, figure);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
			append_dev(figcaption, a0);
			append_dev(a0, t5);
			append_dev(figcaption, t6);
			append_dev(div, t7);
			append_dev(div, p0);
			append_dev(p0, t8);
			append_dev(p0, a1);
			append_dev(a1, t9);
			append_dev(p0, t10);
			append_dev(div, t11);
			append_dev(div, p1);
			append_dev(p1, t12);
			append_dev(div, t13);
			append_dev(div, p2);
			append_dev(p2, t14);
			append_dev(div, t15);
			append_dev(div, p3);
			append_dev(p3, t16);
			append_dev(div, t17);
			append_dev(div, p4);
			append_dev(p4, t18);
			append_dev(div, t19);
			append_dev(div, p5);
			append_dev(p5, t20);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("About", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYTdjYTAyNjMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
